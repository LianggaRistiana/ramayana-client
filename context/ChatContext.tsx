'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';


// Buat context
export const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Provider component
export function ChatProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState<Chat[]>([]);

  // Menambahkan query baru
  const addChat = (chat: Chat) => {
    setChats((prev) => [...prev, chat]);
  };

  // Mengupdate response & context dari chat terakhir
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
