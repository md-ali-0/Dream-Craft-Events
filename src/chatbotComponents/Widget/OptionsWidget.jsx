const OptionsWidget = ({ actionProvider }) => {
  const options = [
    { name: "Events", action: () => actionProvider.handleFetchEvents() },
    { name: "Upcoming Events", action: () =>  actionProvider.handleFetchUpcomingEvents() },
    { name: "Payments", action: actionProvider.handlePaymentOptions },
  ];

  const handleOptionClick = (action) => {
    // Call the action
    action();
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
