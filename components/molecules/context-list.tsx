import ContextItem from "../atoms/context-item"
import SargahGroup from "./sargah-group";


interface ContextListProps {
    contexts: Context[]
}

export default function ContextList({ contexts }: ContextListProps) {
    const groupedContexts = contexts.reduce<Record<string, Context[]>>((acc, curr) => {
        const key = curr.sargah_name;
        if (!acc[key]) acc[key] = [];
        acc[key].push(curr);
        return acc;
    }, {});

    return (
        <div className="flex flex-wrap gap-2 mb-4 mt-4">
            {/* {
                contexts.map((context, index) => (
                    <ContextItem key={
                        index
                    }{...context}></ContextItem>
                ))
            } */}

            {Object.entries(groupedContexts).map(([sargah_name, group], index) => (
                <SargahGroup key={index} title={sargah_name}  contexts={group}></SargahGroup>
            ))}
        </div>
    )
}