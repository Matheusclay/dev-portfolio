"use client"

import { useState } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  sender: "user" | "bot"
  text: string
}

export function AssistantBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { sender: "user", text: input }

    const botReply: Message = {
      sender: "bot",
      text: simulateBotReply(input), 
    }

    setMessages([...messages, userMessage, botReply])
    setInput("")
  }

  function simulateBotReply(userInput: string): string {
    return `Você disse: "${userInput}"` // Estou apenas testando esse bagulho
    
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Avatar className="cursor-pointer hover:opacity-80 transition-opacity w-16 h-16 shadow-lg hover:shadow-xl">
            <AvatarImage src="/assistant-avatar.png" alt="Assistant" />
            <AvatarFallback className="text-xl font-semibold">AI</AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle>Assistente Teste</DialogTitle>
          </DialogHeader>

          <ScrollArea className="flex-1 min-h-0 pr-4">
            <div className="flex flex-col gap-3 p-1">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[75%] p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "ml-auto bg-green-500 text-white"
                      : "mr-auto bg-muted"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="flex gap-2 pt-4 mt-auto">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
            />
            <Button type="submit">Enviar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
