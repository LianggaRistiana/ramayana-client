import CopyButton from "./copy-button";
import PlayButton from "./play-button";



export default function TopVerse({
    sargah_name,
    sargah_number,
    sanskrit_text,
    bait,
    text
}: Context) {

    return (
        <div className="w-full pb-12 mb-4 relative">
            <p className="text-muted-foreground text-sm">
                {`Sargga ${sargah_number} ${sargah_name.toTitleCase()}, Bait ke-${bait} `}
            </p>
            <p className="whitespace-pre-line italic mb-2">
                {sanskrit_text}
            </p>
            <p>
                {text}
            </p>
            <div className="absolute bottom-0 right-0 flex gap-2">
                <CopyButton textToCopy={`${sargah_name}, Bait ke-${bait}\n${sanskrit_text}\n\n${text}`} />
                <PlayButton sarggah_number={sargah_number} bait={bait} />
            </div>
        </div>
    );

}