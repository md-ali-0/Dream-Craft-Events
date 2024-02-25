const OptionsWidget = ({ actionProvider }) => {
  const options = [
    { name: "Events", action: actionProvider.handleFetchEvents },
    { name: "Upcoming Events", action: actionProvider.handleUpcomingEventsDirectly },
    { name: "Payments", action: actionProvider.handlePaymentOptions },
  ];

  const handleOptionClick = (action) => {
    // Call the action
    action();
  };

  const actionProviderA = {
    handleFetchEvents: async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const eventData = await response.json(); // Assume "todos" represent events
  
        return createChatBotMessage(
          "Here are some events:",
          {
            widget: "eventsWidget",
            data: { events: eventData },
          }
        );
      } catch (error) {
        console.error('Error fetching events:', error);
        return createChatBotMessage(
          'Looks like I encountered an error while fetching events. Please try again later.',
        );
      }
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    {options.map((option) => (
      <button
        key={option.name}
        onClick={() => handleOptionClick(option.action)}
        className={`m-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3 transition duration-300 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold text-lg`}
      >
        <span>{option.name}</span>
        {/* Add an icon here if needed */}
      </button>
    ))}
  </div>
  );
};

export default OptionsWidget;
