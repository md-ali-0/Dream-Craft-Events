// src/chatbot/config.jsx
import { createChatBotMessage } from "react-chatbot-kit";
import ChatbotAvatar from "../Chatbot/ChatbotAvatar";

const botAvatarImage =
  "https://i.postimg.cc/zDLLW8xP/cartoon-style-robot-vectorart-78370-4103.jpg";
const userAvatarImage =
  "https://i.postimg.cc/tJRxQx3q/isolated-young-handsome-man-different-poses-white-background-illustration-632498-859.jpg"; // Update with your user avatar image path

const config = {
  initialMessages: [
    createChatBotMessage("Hello! Welcome Here. How can I assist you ?"),
  ],
  botName: "EventMate",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#d4723d",
    },
  },

  customComponents: {
    botAvatar: (props) => (
      <ChatbotAvatar {...props} src={botAvatarImage} alt="Bot" />
    ),
    userAvatar: (props) => (
      <ChatbotAvatar {...props} src={userAvatarImage} alt="User" />
    ),
  },
};

export default config;
