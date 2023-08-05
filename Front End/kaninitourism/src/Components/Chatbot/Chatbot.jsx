import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, user: 'user' };
    const newMessages = [...messages, userMessage];
    setInputValue('');
    setMessages(newMessages);

    setTimeout(() => {
      let botMessage;

      // Simulate a chatbot response based on user input
      if (userMessage.text.toLowerCase().includes('hello')) {
        botMessage = { text: 'Hello there! How can I assist you today?', user: 'bot' };
      } else if (userMessage.text.toLowerCase().includes('help')) {
        botMessage = {
          text: 'Sure, I can help you with a variety of topics. Just let me know what you need assistance with!',
          user: 'bot'
        };
      } else if (userMessage.text.toLowerCase().includes('order')) {
        botMessage = {
          text: 'To place an order, please visit our website and follow the steps outlined there.',
          user: 'bot'
        };
      } else if (userMessage.text.toLowerCase().includes('pricing')) {
        botMessage = {
          text: 'For pricing information, you can visit our Pricing page on our website.',
          user: 'bot'
        };
      } else {
        botMessage = {
          text: 'I\'m sorry, I couldn\'t understand that. How can I assist you?',
          user: 'bot'
        };
      }

      setMessages([...newMessages, botMessage]);
    }, 500);
  };

  return (
    <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <div className="toggle-chat-button" onClick={handleToggleChat}>
        {isChatOpen ? 'Close Chat' : 'Open Chat'}
      </div>
    </div>
  );
}

export default Chatbot;
