'use client'

import InputQuery from "@/components/molecules/input-query";
import { useChat } from '../hooks/use-chat';
import Image from "next/image";
import { createContext, useContext } from "react";
import QueryBubble from "@/components/atoms/query-bubble";
import Response from "@/components/atoms/response";

export default function Home() {
  const { chats, addChat, updateChatResponse } = useChat();

  return (
    <div className="w-full min-h-screen relative">
      {chats.map((chat, i) => (
        <div key={i}>
          <QueryBubble>{chat.query}</QueryBubble>

          {chat.response && <Response>{chat.response}</Response>}
        </div>
      ))}
      <InputQuery></InputQuery>

    </div>
  );
}
