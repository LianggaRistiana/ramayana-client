export default function EmbeddingModelText({ children }: { children?: Number }) {
    return (
        <div className="w-full pt-4">
            <div className=" whitespace-pre-line w-fit text-muted-foreground text-sm">
                {children == 2 ? "Sentence Transformer" : "Cohere"}
            </div>
        </div>
    );

}