// src/chatbot/ChatbotComponent.jsx
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { FaRobot } from "react-icons/fa";
import "../styles/ChatBot.css";
import config from "../config/config";
import ActionProvider from "../utils/ActionProvider";
import MessageParser from "../utils/MessageParser";

function ChatbotComponent() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 flex items-center cursor-pointer"
        style={{ zIndex: 1000 }}
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <FaRobot className="w-10 h-10 mr-2 text-red-400" />
        {/* <span className="text-sm font-semibold" style={{ color: "blue" }}>
          I can guide you!
        </span> */}
      </div>

      {showChatbot && (
        <div
          className="chatbot-container custom-chat-width fixed bottom-16 right-4"
          style={{ zIndex: 1050 }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}

export default ChatbotComponent;
