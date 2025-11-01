import React from "react";

export default function ChatMessage({ sender, text, sentiment }) {
  const isUser = sender === "user";
  return (
    <div className={`message-row ${isUser ? "user-message" : "bot-message"}`}>
      <div className="message-bubble">{text}</div>
    </div>
  );
}
