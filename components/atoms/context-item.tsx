import { Book } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



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
                    {sargah_name.toLowerCase()}, Bait ke-{bait}
                </Badge>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {sargah_name}
                    </DialogTitle>
                    <DialogDescription>
                        Sargah ke-{sargah_number} Bait ke-{bait}
                    </DialogDescription>
                </DialogHeader>
                <p className="whitespace-pre-line italic">
                    {sanskrit_text}
                </p>
                <p>
                    {text}
                </p>
            </DialogContent>
        </Dialog>
    );
}