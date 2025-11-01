import React from "react";

export default function ChatMessage({ sender, text, sentiment }) {
  let red = 0x440000;
  let green = 0x004400;
  let blue = 0x000044;
  if ( sentiment < 0 ) {
    red = (Math.floor(-255*sentiment))<<16;
  } else {
    green = Math.floor(255*sentiment)<<8;
  };
  var colour = red&&green&&blue

  const isUser = sender === "user";
  return (
    <div className={`message-row ${isUser ? "user-message" : "bot-message"}`}>
      <div className="message-bubble">{text}</div>
    </div>
  );
}
