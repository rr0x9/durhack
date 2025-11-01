import React, { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(inputValue);
    setInputValue("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your idea to save the world..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !inputValue.trim()}>
        {disabled ? "..." : "Send"}
      </button>
    </form>
  );
}
