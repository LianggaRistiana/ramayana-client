import { Book } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import SargahVerse from "../atoms/sargah-verse";
import { ScrollArea } from "../ui/scroll-area";


interface SargahGroupItem {
    title: string
    contexts: Context[];
}


export default function SargahGroup({
    title,
    contexts
}: SargahGroupItem) {
    return (
        <Dialog>
            <DialogTrigger>
                <Badge className="cursor-pointer">
                    <Book>
                    </Book>
                    {title.toTitleCase()}
                </Badge>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[500px] pr-4" >
                    {
                        contexts.map((context, index) => (
                            <SargahVerse key={index} {...context}>
                            </SargahVerse>
                        ))
                    }
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}