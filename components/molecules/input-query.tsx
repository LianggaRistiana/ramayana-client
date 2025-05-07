'use client'

import { useState } from "react";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send, Loader2 } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { processQuery } from "@/actions/chat-actions";



export default function InputQuery() {
  const { chats, addChat, updateChatResponse } = useChat();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    if (query.trim()) {
      setIsLoading(true);
      addChat({ query });

      const querySubmited = query;
      const index = chats.length;

      setQuery("");
      try {
        const result = await processQuery(querySubmited);
        updateChatResponse(index, result.response, result.context);
      } catch (error) {
        updateChatResponse(index, "Ada masalah pada server, coba lagi nanti");
      } finally {
        setIsLoading(false)
      }
    }
  };


  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent">
      <div className=" flex justify-between items-center gap-2 px-4 py-4 border rounded-2xl  bg-sidebar">

        <Textarea
          placeholder="Tulis pertanyaan seputar ramayana"
          className="border-none dark:bg-transparent shadow-none focus:ring-0 focus:outline-none resize-none focus-visible:ring-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Textarea>
        <Button
          onClick={handleSubmit}
          disabled={!query.trim() || isLoading}
        >
          {
            isLoading
              ? <><Loader2 className="animate-spin" ></Loader2> Tunggu</>
              : <><Send></Send>Kirim</>
          }

        </Button>
      </div>
    </div>
  );
}