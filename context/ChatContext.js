'use client';

import { createContext, useContext, useState } from 'react';

const ChatContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  messages: [],
  setMessages: () => {},
  askQuestion: () => {},
});

export function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const askQuestion = (question) => {
    setIsOpen(true);
    setMessages(prev => [...prev, { type: 'user', content: question }]);
  };

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, messages, setMessages, askQuestion }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}