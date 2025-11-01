import React from "react";

export default function ChatMessage({ sender, text, sentiment }) {
  let red = 0x44;
  let green = 0x44;
  let blue = 0x44;
  if (sentiment < 0) {
    red = Math.floor(-255 * sentiment);
  } else {
    green = Math.floor(255 * sentiment);
  }

  console.log(sentiment);
  var colour = `rgb(${red},${green},${blue})`;

  console.log(colour);
  const isUser = sender === "user";
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
