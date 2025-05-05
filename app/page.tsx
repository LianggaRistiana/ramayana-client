'use client'

import ChatRoom from "@/components/molecules/chat-room";
import InputQuery from "@/components/molecules/input-query";

import Image from "next/image";
import { createContext, useContext } from "react";

export default function Home() {
  

  return (
    <div className="w-full min-h-screen relative">
      <ChatRoom></ChatRoom>
      <InputQuery></InputQuery>

    </div>
  );
}
