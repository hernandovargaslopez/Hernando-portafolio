
import React, { useState, useEffect, useRef } from 'react';
import { createChatSession } from '../services/geminiService';
import { Message } from '../types';
import { GenerateContentResponse } from '@google/genai';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am Hernando\'s AI representative. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current = createChatSession();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatRef.current.sendMessage({ message: userMsg });
      const response: GenerateContentResponse = result;
      const responseText = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error: Could not reach the AI core.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] glass rounded-2xl overflow-hidden border border-slate-700/50">
      <div className="p-3 border-b border-slate-700/50 flex items-center justify-between bg-slate-800/30">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-semibold text-sm text-slate-200">Gemini 3 Pro Assistant</span>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'model', text: 'Chat history cleared. How can I help?' }])}
          className="text-[10px] text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider font-bold"
        >
          Clear
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/40"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[85%] rounded-full px-4 py-2.5 ${
              m.role === 'user' 
                ? 'bg-[#bf1820] text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-400 rounded-full px-4 py-3 border border-slate-700 rounded-tl-none">
              <div className="flex space-x-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-[#bf1820] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-[#bf1820] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#bf1820] rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-slate-800/50 border-t border-slate-700/50">
        <div className="relative flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask anything..."
            rows={1}
            className="w-full bg-slate-900 border border-slate-700 rounded-full px-4 py-3 pr-14 focus:outline-none focus:ring-1 focus:ring-[#bf1820]/50 resize-none text-sm text-slate-200 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`absolute right-1.5 p-2 rounded-lg transition-all ${
              !input.trim() || isLoading 
                ? 'text-slate-600' 
                : 'text-white bg-primary-gradient shadow-lg shadow-[#bf1820]/20'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-slate-600 mt-2 text-center uppercase tracking-widest font-bold">
          Verified against CV data
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;