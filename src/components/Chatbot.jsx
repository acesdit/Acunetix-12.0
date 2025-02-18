import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, HelpCircle, X } from "lucide-react";
import { Qna_db } from "../data/Qna_db"; // database stored here

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
    if (!input.trim()) return;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4 bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700 transform transition-all duration-300 ease-in-out">
        <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-gray-100 text-xl font-semibold flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-400" />
            Acunetix Bot
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-900">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot ? "bg-gray-700" : "bg-emerald-500"
                  }`}
                >
                  {message.isBot ? (
                    <Bot className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <User className="w-5 h-5 text-gray-900" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.isBot
                      ? "bg-gray-800 text-gray-100 border border-gray-700"
                      : "bg-emerald-500 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2 max-w-[80%]">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg">
                  Thinking...
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-gray-300 text-sm">Suggested Questions:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {DEFAULT_QUESTIONS.map((question, index) => (
              <button
                key={index}
                onClick={() => processUserInput(question)}
                className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200 border border-gray-600"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 text-gray-900 p-2 rounded-lg hover:bg-emerald-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-500"
              disabled={!input.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
