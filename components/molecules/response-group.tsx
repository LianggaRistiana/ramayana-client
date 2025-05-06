import { useState } from "react";
import CopyButton from "../atoms/copy-button";
import Response from "../atoms/response";
import ContextList from "./context-list";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletenResponse } from "../atoms/skeleten-response";


export default function ResponseGroup({
    response,
    context
}: Chat) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative pb-8"

        >
            { !response && <SkeletenResponse></SkeletenResponse>}
            {response && <Response>{response}</Response>}
            {context && <ContextList contexts={context}></ContextList>}
            <AnimatePresence>
                {response && isHover && (
                    <motion.div
                        className="absolute bottom-0"
                        initial={{ x: -20, opacity: 0, scale: 0.2 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: -20, opacity: 0, scale: 0.2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <CopyButton textToCopy={response} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    );
}