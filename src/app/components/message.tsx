'use client'; // Ensures this component only runs on the client side

import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaCircle } from "react-icons/fa";
import SearchBar from "./search";

// Example chat data
const messages = [
    {
        id: 1,
        sender: "John Doe",
        picture: "/hoe.png",
        isActive: true,
        preview: "Hey! How are you?",
        conversation: ["Hi!", "How are you?", "I'm good, thanks."],
    },
    {
        id: 2,
        sender: "Jane Smith",
        picture: "/hoe.png",
        isActive: false,
        preview: "Got your message, let me know when you’re free.",
        conversation: ["Hello!", "Are you available today?", "Sure, let's meet."],
    },
    {
        id: 3,
        sender: "Mike Lee",
        picture: "/hoe.png",
        isActive: true,
        preview: "Looking forward to meeting tomorrow!",
        conversation: ["Hi Mike!", "Looking forward to it too.", "See you tomorrow!"],
    },
];

export default function UserMessage() {
    const [isChatListOpen, setIsChatListOpen] = useState(false);
    const [activeChat, setActiveChat] = useState<number | null>(null);
    const [newMessage, setNewMessage] = useState("");
    const [chatData, setChatData] = useState(messages);

    const toggleChatList = () => {
        setIsChatListOpen(!isChatListOpen);
        setActiveChat(null);
    };

    const openChat = (id: number) => {
        setActiveChat(id);
    };

    const activeConversation = chatData.find((msg) => msg.id === activeChat);

    const sendMessage = () => {
        if (newMessage.trim() === "" || activeChat === null) return;

        setChatData((prevData) =>
            prevData.map((chat) =>
                chat.id === activeChat
                    ? {
                          ...chat,
                          conversation: [...chat.conversation, newMessage],
                          preview: newMessage,
                      }
                    : chat
            )
        );

        setNewMessage("");
    };

    return (
        <div className="min-h-screen flex flex-col justify-end items-end p-4 bg-gray-50">
            {isChatListOpen && (
                <div className="fixed bottom-20 right-6 w-[400px] bg-white border border-gray-300 rounded-lg shadow-lg">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
                        <FaTimes
                            className="text-gray-600 cursor-pointer hover:text-red-500"
                            onClick={toggleChatList}
                        />
                    </div>

                    {/* Search Bar */}
                    <div className="p-3">
                        <SearchBar
                            placeholder="Search messages"
                            className="w-full bg-white border rounded-full px-4 py-2"
                        />
                    </div>

                    {/* Chat List */}
                    <div className="overflow-y-auto max-h-[300px] px-3 space-y-2">
                        {chatData.map((msg) => (
                            <div
                                key={msg.id}
                                onClick={() => openChat(msg.id)}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition"
                            >
                                <div className="relative">
                                    <img
                                        src="/hoe.png"
                                        alt={msg.sender}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    {msg.isActive && (
                                        <FaCircle className="absolute bottom-0 right-0 text-green-500 text-xs" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{msg.sender}</p>
                                    <p className="text-sm text-gray-600 truncate">{msg.preview}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeChat !== null && (
                <div className="fixed bottom-20 right-[410px] w-[400px] bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-lg">
                        <div className="flex items-center gap-3">
                            <img
                                src={activeConversation?.picture || "/hoe.png"}
                                alt={activeConversation?.sender}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{activeConversation?.sender}</p>
                                <p className="text-sm text-gray-600">
                                    {activeConversation?.isActive ? "Active now" : "Offline"}
                                </p>
                            </div>
                        </div>
                        <FaTimes
                            className="text-gray-600 cursor-pointer hover:text-red-500"
                            onClick={() => setActiveChat(null)}
                        />
                    </div>

                    <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                        {activeConversation?.conversation.map((line, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    index % 2 === 0 ? "justify-end" : "justify-start"
                                }`}
                            >
                                <p
                                    className={`px-4 py-2 rounded-lg shadow ${
                                        index % 2 === 0
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-200 text-gray-800"
                                    }`}
                                >
                                    {line}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center p-3 bg-gray-100 rounded-b-lg">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Write a message..."
                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}

            <div
                onClick={toggleChatList}
                className="fixed bottom-6 right-6 bg-green-600 p-5 rounded-full text-white shadow-lg cursor-pointer hover:bg-green-700 transition"
            >
                <FaComments className="text-3xl" />
            </div>
        </div>
    );
}
