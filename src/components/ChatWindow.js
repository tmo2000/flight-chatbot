//This component represents the chat window
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './Chatbot.css'; 

function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: 'Hi! Type in your flight code and ask any questions', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);

    // Add chatbot reply here later
    setInput('');
  };

  return (
    <div className="wrapper">
      <div className="title">Flight Info Chatbot</div>
      <div className="box">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <div className="typing-area">
        <div className="input-field">
          <input
            type="text"
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            required
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
