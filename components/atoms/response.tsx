export default function Response({ children }: { children: string }) {
    return (
        <div className="w-full pb-4">
            <div className=" whitespace-pre-line w-fit">
                {children}
            </div>
        </div>
    );
}