import React, { useState } from "react";
import { Button } from "../ui/button";
import { Copy, Check } from "lucide-react";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 7000);
        } catch (err) {
            setCopySuccess(false);
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div>
            <Button
                onClick={handleCopy}
                variant={"outline"}
                size={"icon"}
                className=""
                disabled={copySuccess}
            >
                {copySuccess
                    ? <Check></Check>
                    : <Copy></Copy>
        }
            </Button>
        </div>
    );
};



export default CopyButton;
