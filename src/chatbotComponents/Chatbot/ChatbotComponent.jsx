import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import chatbotlogo from "../../assets/chatbot/Chatbot Chat Message.jpg";
import config from "../config/config";
import "../styles/ChatBot.css";
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
        <img className="w-12 h-12 bg-rose-200 rounded-full object-cover mr-2" src={chatbotlogo} alt="" />
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