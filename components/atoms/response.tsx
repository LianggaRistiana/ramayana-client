import ReactMarkdown from 'react-markdown';

export default function Response({ children }: { children: string }) {
    return (
        <div className="w-full pb-4">
            {/* <div className=" whitespace-pre-line w-fit">
                {children}
            </div> */}
            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{children}</ReactMarkdown>
            </div>
        </div>
    );
}