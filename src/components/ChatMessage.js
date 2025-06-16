//This component represents each message in the chat
import React from 'react';

function ChatMessage({ message, isUser }) {
  return (
    <div className={`item ${isUser ? 'right' : ''}`}>
      {!isUser && (
        <div className="icon">
          <i className="fa fa-user" />
        </div>
      )}
      <div className="msg">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
