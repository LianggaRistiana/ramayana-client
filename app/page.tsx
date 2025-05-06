'use client'

import ChatRoom from "@/components/organisms/chat-room";
import InputQuery from "@/components/molecules/input-query";

export default function Home() {
  

  return (
    <div className="w-full min-h-screen relative">
      <ChatRoom></ChatRoom>
      <InputQuery></InputQuery>

    </div>
  );
}
