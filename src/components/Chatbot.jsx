import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, HelpCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Qna_db } from "../data/Qna_db";

const DEFAULT_QUESTIONS = [
  "what is Acunetix",
  "who organizes Acunetix",
  "where is Acunetix held",
  "what are the main events in Acunetix",
];

const INITIAL_MESSAGE = {
  id: 1,
  text: "Hello! I'm your AI assistant. How can I help you today? You can click on one of the suggested questions below or type your own!",
  isBot: true,
};

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || input.length > 200) return;
    processUserInput(input);
  };

  const processUserInput = (question) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateResponse(question.toLowerCase()),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500); // Simulate a delay before the bot responds
  };

  const generateResponse = (question) => {
    const matchingQuestion = Object.keys(Qna_db).find((key) =>
      question.toLowerCase().includes(key.toLowerCase())
    );

    if (matchingQuestion) {
      return Qna_db[matchingQuestion].answer;
    }

    return "I'm not sure how to answer that question. Could you try asking something else?";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-2xl mx-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 animate-pulse pointer-events-none" />

        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700/50 flex justify-between items-center">
          <h1 className="text-gray-100 text-xl font-semibold flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Bot className="w-6 h-6 text-blue-400" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Acunetix AI
            </span>
          </h1>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            aria-label="Close chatbot"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Chat Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900/80 to-gray-800/80 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: message.isBot ? -20 : 20 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isBot ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                      message.isBot
                        ? "bg-gradient-to-br from-blue-500 to-blue-600"
                        : "bg-gradient-to-br from-emerald-500 to-emerald-600"
                    }`}
                  >
                    {message.isBot ? (
                      <Bot className="w-5 h-5 text-gray-100" />
                    ) : (
                      <User className="w-5 h-5 text-gray-100" />
                    )}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-xl shadow-lg backdrop-blur-sm ${
                      message.isBot
                        ? "bg-gray-800/80 text-blue-300 border border-blue-400/30"
                        : "bg-gray-700/80 text-emerald-300 border border-emerald-400/30"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex items-center space-x-2 max-w-[80%]">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-gray-100" />
                </div>
                <div className="flex space-x-2 p-3 bg-gray-800/80 text-blue-300 border border-blue-400/30 rounded-xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: i * 0.2,
                      }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries */}
        <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700/50">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Suggested Queries:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {DEFAULT_QUESTIONS.map((question, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => processUserInput(question)}
                className="px-3 py-1.5 bg-gray-700/80 text-blue-300 rounded-xl text-sm hover:bg-gray-600/80 transition-all duration-200 border border-blue-400/30 backdrop-blur-sm"
                aria-label={`Ask: ${question}`}
              >
                {question}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="p-4 border-t border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex space-x-2">
            <motion.input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your query..."
              className="flex-1 p-3 bg-gray-700/80 text-blue-300 border border-blue-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-300/50 backdrop-blur-sm"
              whileFocus={{ scale: 1.02 }}
              maxLength={200}
              aria-label="Type your message"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-gray-100 p-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!input.trim() || input.length > 200}
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}