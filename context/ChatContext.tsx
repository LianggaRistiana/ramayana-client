'use client';

import React, { createContext, ReactNode, useState } from 'react';

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState<Chat[]>([]);

  const addChat = (chat: Chat) => {
    setChats((prev) => [...prev, chat]);
  };


  const updateChatResponse = (index: number, response: string, context?: Context[]) => {
    setChats((prev) =>
      prev.map((chat, i) =>
        i === index ? { ...chat, response, context } : chat
      )
    );
  };

  const clearChats = () => setChats([]);

  return (
    <ChatContext.Provider value={{ chats, addChat, updateChatResponse, clearChats }}>
      {children}
    </ChatContext.Provider>
  );
}
