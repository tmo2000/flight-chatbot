import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { from: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Error connecting to the server.' },
      ]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <h2 style={styles.header}>✈️ Flight Assistant</h2>
        <div style={styles.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.from === 'user' ? '#DCF8C6' : '#F1F0F0',
              }}
            >
              <p style={styles.messageText}><strong>{msg.from === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}</p>
            </div>
          ))}
        </div>
        <div style={styles.inputArea}>
          <input
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me about flights..."
          />
          <button style={styles.button} onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: '#f9f9f9',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  chatBox: {
    width: '100%',
    maxWidth: 500,
    height: '80vh',
    background: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    padding: 20,
    borderBottom: '1px solid #ddd',
    margin: 0,
    fontSize: 20,
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
  messages: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    overflowY: 'auto',
  },
  message: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  messageText: {
    margin: 0,
    fontSize: 14,
    lineHeight: '1.4em',
  },
  inputArea: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    padding: 10,
  },
  input: {
    flex: 1,
    border: 'none',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    outline: 'none',
    backgroundColor: '#f5f5f5',
  },
  button: {
    marginLeft: 10,
    padding: '10px 20px',
    border: 'none',
    borderRadius: 8,
    backgroundColor: '#007BFF',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default App;
