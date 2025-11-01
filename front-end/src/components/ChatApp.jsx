import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ChatApp() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "🌍 The world is crumbling... Tell me how you’ll help save it!",
    },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Simulate AI streaming effect
  const streamBotMessage = async (fullText) => {
    const newMessage = { sender: "bot", text: "" };
    setMessages((prev) => [...prev, newMessage]);

    for (let i = 0; i < fullText.length; i++) {
      await new Promise((r) => setTimeout(r, 25)); // typing speed
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].text = fullText.slice(0, i + 1);
        return updated;
      });
    }
  };

  // Handle user input
  const handleSend = async (userInput) => {
    if (!userInput.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setIsGenerating(true);

    // Simulated AI response (replace with your API call)
    const fakeAIResponse = `If everyone stopped "${userInput}", the oceans would sparkle again, dolphins would high-five, and ice cream would taste better. 🌊🍦`;

    await streamBotMessage(fakeAIResponse);
    setIsGenerating(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            sender={msg.sender}
            text={msg.text}
            sentiment={0.1}
          />
        ))}
      </div>
      <ChatInput onSend={handleSend} disabled={isGenerating} />
    </div>
  );
}
