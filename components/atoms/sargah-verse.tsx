import {
    DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CopyButton from "./copy-button";
import PlayButton from "./play-button";

export default function SargahVerse({
    sargah_name,
    sargah_number,
    sanskrit_text,
    is_sound_available,
    bait,
    text
}: Context) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="w-full pb-12 mb-4 relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <DialogDescription>
                Bait ke-{bait}
            </DialogDescription>
            <p className="whitespace-pre-line italic mb-2">
                {sanskrit_text}
            </p>
            <p className="whitespace-pre-line">
                {text}
            </p>

            {/* <AnimatePresence>
                {
                    isHover &&
                    <motion.div
                        className="absolute bottom-0 right-12 flex gap-2"
                        initial={{ y: -20, opacity: 0, scale: 0.2 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -20, opacity: 0, scale: 0.2 }}
                        transition={{ duration: 0.2 }}
                    >

                        <CopyButton textToCopy={`${sargah_name}, Bait ke-${bait}\n${sanskrit_text}\n\n${text}`} />
                    </motion.div>

                }
            </AnimatePresence> */}
            <div className="absolute bottom-0 right-0 flex gap-2">

                <CopyButton textToCopy={`${sargah_name}, Bait ke-${bait}\n${sanskrit_text}\n\n${text}`} />
                {/* <PlayButton sarggah_number={sargah_number} bait={bait} /> */}
                {
                    is_sound_available == true &&
                    <PlayButton sarggah_number={sargah_number} bait={bait} />
                }
            </div>
        </div>
    );

}