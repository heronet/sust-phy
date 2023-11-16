"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Message, useChat } from "ai/react";
import { useRef } from "react";

const AISolverPage = () => {
  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      initialMessages: [
        {
          content: "Ask me to solve physics problems",
          role: "assistant",
          id: "35adde2b-74c8-4b48-833b-7d777866c0ad",
        },
      ],
    });
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto w-full max-w-3xl h-full max-h-[calc(100%-80px)]">
      <div className="flex flex-col h-full border rounded m-2">
        {/* Header */}
        <div className="flex border-b items-center">
          <Avatar className="mx-3">
            <AvatarImage src="/img/newton.jpg" />
            <AvatarFallback>NT</AvatarFallback>
          </Avatar>
          <div className="w-full my-2 mx-1 flex flex-col">
            <span className="text-lg">Newton</span>
            <span className="text-sm text-gray-500">
              {isLoading ? "Typing..." : "Online"}
            </span>
          </div>
        </div>

        {/* Chats */}
        <div
          className="flex flex-col flex-1 py-3 h-full relative gap-2 overflow-y-auto "
          ref={divRef}
        >
          {messages.map((message: Message) => (
            <div
              key={message.id}
              className={cn(
                message.role === "assistant" ? "" : "self-end ",
                "max-w-[85%] z-10 bg-background text-sm md:text-base"
              )}
            >
              <p className="max-w-max border rounded whitespace-pre-wrap px-2 py-1 mx-2">
                {message.content}
              </p>
            </div>
          ))}
        </div>

        {/* Input */}
        <form className="flex gap-3 m-2 items-center" onSubmit={handleSubmit}>
          <Input
            className="flex-1 rounded border focus:ring-1 px-2"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
          <Button disabled={isLoading}>
            <PaperPlaneIcon></PaperPlaneIcon>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AISolverPage;
