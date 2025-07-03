import { useState } from "react";
import CopyButton from "../atoms/copy-button";
import Response from "../atoms/response";
import ContextList from "./context-list";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletenResponse } from "../atoms/skeleten-response";
import TopContextList from "./top-context-list";
import EmbeddingModelText from "../atoms/embedding-model-text";


export default function ResponseGroup({
    response,
    context,
    embedding_model
}: Chat) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div>
            {!response && <SkeletenResponse />}
            <div

                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="relative mb-2">
                {response && <EmbeddingModelText>{embedding_model}</EmbeddingModelText>}
                {response && <Response>{response}</Response>}
                <AnimatePresence>
                    {response && isHover && (
                        <motion.div
                            className="absolute top-0 left-0"
                            initial={{ y: 0, opacity: 0, scale: 0.2 }}
                            animate={{ y: -30, opacity: 1, scale: 1 }}
                            exit={{ y: 0, opacity: 0, scale: 0.2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <CopyButton textToCopy={response} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {context?.some(item => item.is_top_k) && context[0].sargah_number != 0 && <TopContextList contexts={context.filter(item => item.is_top_k)} />}
            {context && context[0].sargah_number != 0 && <ContextList contexts={context} />}
        </div>
    );
}