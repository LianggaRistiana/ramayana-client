import { Book } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CopyButton from "./copy-button";



export default function ContextItem({
    sargah_name,
    sargah_number,
    sanskrit_text,
    bait,
    text
}: Context) {
    return (
        <Dialog>
            <DialogTrigger>
                <Badge className="cursor-pointer">
                    <Book>
                    </Book>
                    {sargah_name.toTitleCase()}, Bait ke-{bait}
                </Badge>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {sargah_number}. {sargah_name.toTitleCase()}
                    </DialogTitle>
                    <DialogDescription>
                        Bait ke-{bait}
                    </DialogDescription>
                </DialogHeader>
                <p className="whitespace-pre-line italic">
                    {sanskrit_text}
                </p>
                <p>
                    {text}
                </p>
                <DialogFooter>
                    <CopyButton textToCopy={`${sanskrit_text}\n\n${text}`}></CopyButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}