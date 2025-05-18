import TopVerse from "../atoms/top-verse";



interface Props {
    contexts: Context[];
}


export default function TopContextList({ contexts }: Props) {
    return (
        <div className="border py-4 px-4 rounded-xl">
            {
                contexts.map((context, index) => (
                    <TopVerse
                        key={index}
                        {...context}
                    />
                ))
            }

        </div>
    )
}