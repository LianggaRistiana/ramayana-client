import { useState } from "react";
import CopyButton from "./copy-button"
import { motion, AnimatePresence } from "framer-motion";


export default function QueryBubble({ children }: { children: string }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="w-full flex justify-end">
            <div
                className="relative group pl-12"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <AnimatePresence>
                    {isHover && (
                        <motion.div
                            className="absolute left-0 top-2"
                            initial={{ x: +10, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: +10, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <CopyButton
                                textToCopy={children}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="py-4 px-4 border rounded-2xl shadow-lg bg-sidebar whitespace-pre-line w-fit">
                    {children}
                </div>
            </div>
        </div>
    );
}
