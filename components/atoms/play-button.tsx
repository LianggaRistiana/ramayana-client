import { Loader2, Play, CircleStop, Square } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FakeProcessSound } from "@/actions/play-verse-action";
import { toast } from "sonner";

export default function PlayButton({
  sarggah_number,
  bait,
}: {
  sarggah_number: number;
  bait: number;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playTrigger, setPlayTrigger] = useState(false);

  useEffect(() => {
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      console.log("Cleanup useEffect, audio:", audio);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
    };
  }, [audio]);

  useEffect(() => {
    if (audio && playTrigger) {
      audio.play().catch((err) => {
        console.error("Gagal memutar audio:", err);
        setIsPlaying(false);
        toast.error(`Gagal memutar suara: ${err.message}`);
      });
      setPlayTrigger(false);
    }
  }, [audio, playTrigger]);

  const handlePlay = async () => {
    setIsLoading(true);
    try {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setAudio(null);
      }

      const audioUrl = await FakeProcessSound(sarggah_number, bait);
      console.log("Audio URL:", audioUrl);
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
      setPlayTrigger(true);
    } catch (error: any) {
      console.error("Error di handlePlay:", error);
      toast.error(`Gagal memuat suara: ${error.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <Button
        onClick={isPlaying ? handleStop : handlePlay}
        variant={"outline"}
        size={"icon"}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : isPlaying ? (
          <Square />
        ) : (
          <Play />
        )}
      </Button>
    </div>
  );
}