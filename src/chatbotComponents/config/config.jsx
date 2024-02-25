import { createChatBotMessage } from "react-chatbot-kit";
import ChatbotAvatar from "../Chatbot/ChatbotAvatar";
// Import the widget components
import EventsWidget from '../Widget/EventsWidget'; // Adjust the path as necessary
import UpcomingEventsWidget from '../widget/UpcomingEventsWidget'; // Adjust the path as necessary
import PaymentsWidget from '../widget/PaymentsWidget'; // Adjust the path as necessary
import OptionsWidget from "../Widget/OptionsWidget";

const botAvatarImage = "https://i.postimg.cc/zDLLW8xP/cartoon-style-robot-vectorart-78370-4103.jpg";
const userAvatarImage = "https://i.postimg.cc/tJRxQx3q/isolated-young-handsome-man-different-poses-white-background-illustration-632498-859.jpg";

const config = {
  initialMessages: [
    createChatBotMessage("Hello! Welcome Here. How can I assist you?",{
    delay: 500,
    widget: "optionsWidget",
    
    })
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
  widgets: [
    {
      widgetName: 'optionsWidget',
      widgetFunc: (props) => <OptionsWidget {...props}  />,
    },
    {
      widgetName: 'eventsWidget',
      widgetFunc: (props) => <EventsWidget {...props} />,
    },
    {
      widgetName: 'upcomingEventsWidget',
      widgetFunc: (props) => <UpcomingEventsWidget {...props} />,
    },
    {
      widgetName: 'paymentsWidget',
      widgetFunc: (props) => <PaymentsWidget {...props} />,
    },
  ],
};

export default config;