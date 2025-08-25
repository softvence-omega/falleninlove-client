import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    text: "Hello! I'm your AI Policy Assistant. How can I help you with policies and procedures today?",
    sender: 'ai',
  },
  {
    id: 2,
    text: "What is the policy on incident reporting for falls?",
    sender: 'user',
  },
  {
    id: 3,
    text: 'Our "Incident Reporting Procedure" (Policy ID: IR-001) states that all falls, regardless of injury, must be reported within 24 hours using the designated incident report form. Ensure you document the date, time, location, individuals involved, and any immediate actions taken. Would you like me to provide a link to the full policy?',
    sender: 'ai',
  },
];
interface AiPolicyInputProps {
  inputMessage: string;
  setInputMessage: (value: string) => void;
  handleSendMessage: () => void;
}

const AiPolicyInput: React.FC<AiPolicyInputProps> = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <div className="p-6 border border-yellow-400  rounded-xl  bg-gray-50">
      {/* Input and Buttons Section */}
      <div className="flex items-center space-x-2 sm:space-x-4 ">
        <input
          type="text"
          placeholder="Ask a question about policies"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent"
        />
        <button className="flex items-center justify-center px-4 py-3 bg-[#2c3e50] text-white rounded-lg font-semibold hover:bg-[#34495e] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          <Mic size={20} className="mr-1" />
          Voice
        </button>
        <button
          onClick={handleSendMessage}
          className="flex items-center justify-center px-4 py-3 bg-[#40C7B4] text-white rounded-lg font-semibold shadow-md hover:bg-[#32a08f] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40C7B4]"
        >
          Send
          <Send size={18} className="ml-2 transform rotate-45" />
        </button>
      </div>
      {/* Example Questions Section */}
      <div className="text-sm text-gray-500">
        <div className="font-semibold mb-1">Example questions:</div>
        <ul className="list-disc list-inside space-y-1">
          <li>"What is the policy on medication storage?"</li>
          <li>"How do I report a near miss?"</li>
          <li>"Tell me about the staff training requirements."</li>
        </ul>
      </div>
    </div>
  );
};

const AiPolicyUserDash = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  // Function to handle sending a new message.
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    // Create a new message object for the user's input.
    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
    };
    // Add the new message to the state.
    setMessages([...messages, newMessage]);
    // Clear the input field.
    setInputMessage('');
    // Simulate an AI response after a short delay for demonstration.
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: "Thank you for your question. I'm processing your request...",
          sender: 'ai',
        },
      ]);
    }, 1000);
  };
  return (
    <div className=" min-h-screen p-4 sm:p-8 font-['Inter'] flex flex-col items-center">
      <div className=" w-full  rounded-xl  overflow-hidden flex flex-col h-[50vh] md:h-[70vh] mb-8">
        {/* Header */}
        <div className="p-6 ">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            AI Policy Assistant
          </h1>
        </div>
        {/* Chat Messages Container */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 border border-yellow-400 rounded-xl">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-5 py-4 rounded-xl shadow-md
                  ${message.sender === 'user'
                    ? 'bg-[#3498db] text-white rounded-tr-none'
                    : 'bg-[#333f4d] text-white rounded-tl-none'
                }`}
              >
                <div className="font-semibold mb-1">
                  {message.sender === 'user' ? 'You' : 'CareSuite AI'}
                </div>
                <div>{message.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Render the separated input component */}
      <div className=" w-full">
        <AiPolicyInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default AiPolicyUserDash;
