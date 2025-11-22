"use client";

import { useState } from "react";
import {
  Send,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  isLink?: boolean;
}

export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi! 👋 I can help you design a Web3 marketing campaign.\n\nLet's start with a few questions:\n• What is your project goal?\n• What is your target location?",
    },
  ]);
  const [input, setInput] = useState("");
  const [conversationStep, setConversationStep] = useState(0);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");

    // Simulate AI response with timeout
    setTimeout(() => {
      let assistantResponse: Message;

      if (conversationStep === 0) {
        // After first user input (goal + location)
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Great! Now please paste your website link so I can analyze it.",
        };
        setConversationStep(1);
      } else if (conversationStep === 1) {
        // After website link
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Perfect! 🚀 Let me analyze your project and match you with the best KOLs.",
          isLink: true,
        };
        setConversationStep(2);
      } else {
        // Default response for any additional messages
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Your campaign is ready! You can view it using the link above.",
        };
      }

      setMessages((prev) => [...prev, assistantResponse]);
    }, 2500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content:
          "Hi! 👋 I can help you design a Web3 marketing campaign.\n\nLet's start with a few questions:\n• What is your project goal?\n• What is your target location?",
      },
    ]);
    setInput("");
    setConversationStep(0);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6 rounded-t-3xl mx-4 mt-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Campaign Assistant
            </h1>
            <p className="text-sm text-gray-600">Powered by AI & Vlayer ZK</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            {message.isLink ? (
              /* Campaign Link CTA Card */
              <div className="space-y-4">
                {/* Regular message bubble */}
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-2xl">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="px-6 py-4 rounded-2xl shadow-sm bg-white border border-gray-200">
                      <p className="text-sm leading-relaxed whitespace-pre-line text-gray-800">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-2xl">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 rounded-2xl p-6 text-center text-white shadow-lg">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <LinkIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mb-2">
                        The campaign page is ready!
                      </h2>
                      <p className="text-purple-100 text-sm mb-4">
                        Check this out
                      </p>
                      <Link href="/campaign-details">
                        <button className="bg-white text-purple-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
                          View Campaign
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular message bubble */
              <div
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-2xl ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "assistant"
                        ? "bg-gradient-to-br from-purple-500 to-indigo-600"
                        : "bg-gray-300"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <Sparkles className="w-5 h-5 text-white" />
                    ) : (
                      <div className="w-5 h-5 bg-gray-500 rounded-full" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-sm ${
                      message.role === "assistant"
                        ? "bg-white border border-gray-200"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    <p
                      className={`text-sm leading-relaxed whitespace-pre-line ${
                        message.role === "assistant"
                          ? "text-gray-800"
                          : "text-white"
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4 mx-4 mb-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleReset}
            className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
