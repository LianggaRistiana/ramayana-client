'use client'

import { useState } from "react";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send } from "lucide-react";

export default function InputQuery() {
    const [query, setQuery] = useState("");
    const handleSubmit = () => {

    }

    return (
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto py-4 bg-background fixed bottom-4 left-0 right-0">
            <div className=" flex justify-between items-center gap-2 px-4 py-4 border rounded-lg shadow-lg bg-sidebar">

                <Textarea
                    placeholder="Tulis Pertanyaan seputar ramayana"
                    className="border-none dark:bg-transparent shadow-none focus:ring-0 focus:outline-none resize-none focus-visible:ring-0"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                ></Textarea>
                <Button
                    onClick={handleSubmit}
                    disabled={!query.trim()}
                >
                    <Send></Send>
                    Kirim
                </Button>
            </div>
        </div>
    );
}