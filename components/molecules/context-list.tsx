import ContextItem from "../atoms/context-item"


interface ContextListProps {
    contexts: Context[]
}

export default function ContextList({ contexts }: ContextListProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-16">
            {
                contexts.map((context, index) => (
                    <ContextItem key={
                        index
                    }{...context}></ContextItem>
                ))
            }
        </div>
    )

}