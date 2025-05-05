

export default function QueryBubble({ children }: { children: string }) {
    return (
        <div className="w-full flex flex-col">
            <div className="flex justify-end">
                <div className=" py-4 px-4 border rounded-2xl shadow-lg bg-sidebar whitespace-pre-line w-fit">
                    {children}
                </div>
            </div>
        </div>
    );

}