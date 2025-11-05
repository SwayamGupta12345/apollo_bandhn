"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Send, Phone, Video, Info, Search, Plus } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Priya Sharma",
    lastMessage: "That sounds great! Let's talk more",
    time: "2 min",
    unread: 2,
    image: "/placeholder.svg?key=pbwpd",
    status: "online",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    lastMessage: "Thanks for the suggestion!",
    time: "1 hour",
    unread: 0,
    image: "/placeholder.svg?key=zeayq",
    status: "offline",
  },
  {
    id: 3,
    name: "Divya Gupta",
    lastMessage: "Looking forward to meeting you",
    time: "5 hours",
    unread: 1,
    image: "/placeholder.svg?key=skgs4",
    status: "online",
  },
]

const messages = [
  { id: 1, sender: "Priya", text: "Hi! How are you?", time: "10:30 AM", isOwn: false },
  { id: 2, sender: "You", text: "Hi Priya! I'm doing great, thanks for asking", time: "10:31 AM", isOwn: true },
  {
    id: 3,
    sender: "Priya",
    text: "That's wonderful! What do you like to do in your free time?",
    time: "10:32 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "You",
    text: "I love reading, traveling, and cooking. How about you?",
    time: "10:35 AM",
    isOwn: true,
  },
  { id: 5, sender: "Priya", text: "That sounds great! Let's talk more", time: "10:36 AM", isOwn: false },
]

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")
  const [allMessages, setAllMessages] = useState(messages)

  const handleSendMessage = () => {
    if (!messageText.trim()) return

    setAllMessages([
      ...allMessages,
      {
        id: allMessages.length + 1,
        sender: "You",
        text: messageText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      },
    ])
    setMessageText("")
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left flex gap-3 ${
                    selectedConversation.id === conv.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={conv.image || "/placeholder.svg"}
                      alt={conv.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conv.status === "online" && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-gray-900">{conv.name}</p>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                      {conv.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={selectedConversation.image || "/placeholder.svg"}
                  alt={selectedConversation.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{selectedConversation.name}</p>
                  <p className="text-xs text-gray-500">{selectedConversation.status}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Info className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {allMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.isOwn ? "bg-gradient-to-r from-blue-600 to-red-700 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isOwn ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
