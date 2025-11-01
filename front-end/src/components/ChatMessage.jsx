import React from "react";

export default function ChatMessage({ sender, text, sentiment }) {
  const isUser = sender === "user";

  const colour = "#c43b1fff";

  return (
    <div className={`message-row ${isUser ? "user-message" : "bot-message"}`}>
      <div
        className="message-bubble"
        style={!isUser ? { backgroundColor: colour } : {}}
      >
        {text}
      </div>
    </div>
  );
}
