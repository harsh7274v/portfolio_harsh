import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [hasPrompted, setHasPrompted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (suggestion) => {
    let response = "";
    switch (suggestion.action) {
      case "frontend":
        response = "My frontend skills include React, Next.js, JavaScript, TypeScript, Material UI, Tailwind CSS, and more.";
        break;
      case "backend":
        response = "My backend skills include Node.js, Express.js, Spring Boot, MongoDB, and more.";
        break;
      case "tools":
        response = "I use tools like Git, VS Code, Postman, and more.";
        break;
      case "hobbies":
        response = "My hobbies include coding, reading tech blogs, trading, and going to the gym.";
        break;
      default:
        response = "I'm not sure about that. Could you try something else?";
    }
    setMessages(prev => [
      ...prev,
      { text: suggestion.text, sender: 'user' },
      { text: response, sender: 'bot' }
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // If this is the first user message, show the prompt and options
    if (!hasPrompted) {
      setHasPrompted(true);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: "What do you want to know about me?",
            sender: 'bot',
            suggestions: [
              { text: "Frontend Skills", action: "frontend" },
              { text: "Backend Skills", action: "backend" },
              { text: "Tools", action: "tools" },
              { text: "Hobbies", action: "hobbies" }
            ]
          }
        ]);
      }, 500);
      return;
    }

    // Simulate bot response for subsequent messages
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "I'm a demo chatbot. Please select an option above to learn more!",
          sender: 'bot'
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FiX size={24} color="#fff" /> : <FiMessageSquare size={24} color="#fff" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-8 w-80 h-96 bg-white dark:bg-dark-800 rounded-xl shadow-xl overflow-hidden flex flex-col z-50"
          >
            {/* Chat Header */}
            <div className="bg-accent-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BsRobot className="text-blue-500" size={20} />
                <span className="text-white font-semibold">AI Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-accent-500 text-white'
                          : 'bg-gray-100 dark:bg-dark-700 text-dark-900 dark:text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                  {message.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-3 py-1 text-sm bg-gray-200 dark:bg-dark-600 text-dark-900 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {suggestion.text}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-dark-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-accent-500 text-white hover:bg-accent-600 transition-colors"
                >
                  <FiSend size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 