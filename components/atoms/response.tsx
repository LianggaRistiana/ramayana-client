import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

export default function Response({ children }: { children: string }) {
    return (
        <div className="w-full py-4">
            <div className=" whitespace-pre-line w-fit">
                {children}
            </div>
        </div>
    );

}