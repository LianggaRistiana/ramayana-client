import {
    DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CopyButton from "./copy-button";

export default function SargahVerse({
    sargah_name,
    sargah_number,
    sanskrit_text,
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
            <p>
                {text}
            </p>
            <AnimatePresence>
                {
                    isHover &&
                    <motion.div
                        className="absolute bottom-0"
                        initial={{ y: -20, opacity: 0, scale: 0.2 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -20, opacity: 0, scale: 0.2 }}
                        transition={{ duration: 0.2 }}
                    >

                        <CopyButton textToCopy={`${sargah_name}, Bait ke-${bait}\n${sanskrit_text}\n\n${text}`}></CopyButton>
                    </motion.div>

                }
            </AnimatePresence>
        </div>
    );

}