"use client"

import { useChat } from "@/hooks/use-chat";
import QueryBubble from "../atoms/query-bubble";
import { useEffect, useRef } from "react";
import ResponseGroup from "../molecules/response-group";

export default function ChatRoom() {
    const { chats, addChat, updateChatResponse } = useChat();
    const lastChatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lastChatRef.current) {
            lastChatRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chats]);

    return (
        <div className="w-full min-h-screen relative overflow-y-auto mb-32">
            {chats.map((chat, i) => (
                <div
                    key={i}
                    ref={i === chats.length - 1 ? lastChatRef : null}
                    className={i === chats.length - 1 ? "scroll-mt-20 mb-16" : "mb-16"}
                >
                    <QueryBubble>{chat.query}</QueryBubble>
                    <ResponseGroup {...chat}></ResponseGroup>
                </div>
            ))}
        </div>
    );
}
