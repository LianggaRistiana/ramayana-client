'use client'

import { useState } from "react";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send } from "lucide-react";
import { useChat } from "@/hooks/use-chat";

export default function InputQuery() {
    const { chats, addChat, updateChatResponse } = useChat();

    const [query, setQuery] = useState("");
    const handleSubmit = () => {
        // Cek jika query tidak kosong
        if (query.trim()) {
          // Menambahkan chat baru ke context
          addChat({ query });
          setQuery(""); // Reset query setelah ditambahkan
          const index = chats.length; 
          updateChatResponse(index, "Benar sekali krisna ketua hmti");
        }
      };
    

    return (
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto py-4 bg-background fixed bottom-0 left-0 right-0">
            <div className=" flex justify-between items-center gap-2 px-4 py-4 border rounded-2xl shadow-lg bg-sidebar">

                <Textarea
                    placeholder="Tulis pertanyaan seputar ramayana"
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