// OptionsWidget.jsx
import React from 'react';

const OptionsWidget = ({ setChatbotState }) => {
  const options = [
    { name: "Events", widget: "eventsWidget" },
    { name: "Upcoming Events", widget: "upcomingEventsWidget" },
    { name: "Payments", widget: "paymentsWidget" },
  ];

  const handleOptionClick = (widgetName) => {
    // Function to trigger the selected widget
    setChatbotState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, createChatBotMessage("", { widget: widgetName })],
    }));
  };

  return (
    <div>
      {options.map((option) => (
        <button key={option.widget} onClick={() => handleOptionClick(option.widget)} className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default OptionsWidget;
