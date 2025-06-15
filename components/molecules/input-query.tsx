'use client'

import { useState } from "react";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send, Loader2 } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { processQuery } from "@/actions/chat-actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function InputQuery() {
  const { chats, addChat, updateChatResponse } = useChat();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [embeddingModel, setEmbeddingModel] = useState("1");

  const handleSubmit = async () => {
    if (query.trim()) {
      setIsLoading(true);
      addChat({ query: query, embedding_model: Number(embeddingModel) });

      const querySubmited = query;
      const index = chats.length;

      setQuery("");
      try {
        const result = await processQuery(
          {
            query: querySubmited,
            embedding_model: Number(embeddingModel)
          }
        );
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
      <div className=" px-4 py-4 border rounded-2xl bg-sidebar">
        <Textarea
          placeholder="Tulis pertanyaan seputar ramayana"
          // className="border-none dark:bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0
          //    resize-none max-h-[200px] overflow-y-auto"
          className=" border-none dark:bg-transparent shadow-none focus:ring-0 focus:outline-none resize-none focus-visible:ring-0"
          value={query}
          rows={1}
          onChange={(e) => setQuery(e.target.value)}
        ></Textarea>
        <div className="flex justify-between items-center gap-2">
          <Select value={embeddingModel} onValueChange={(value) => setEmbeddingModel(value)}>
            <SelectTrigger className="w-[190px] bg-transparent border-0 shadow-none focus:ring-0">
              <SelectValue placeholder="Model Embedding" defaultValue={'1'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Cohere</SelectItem>
              <SelectItem value="2">Sentence Transformer</SelectItem>
            </SelectContent>
          </Select>
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
    </div>
  );
}