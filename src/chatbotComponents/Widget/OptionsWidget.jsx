const OptionsWidget = ({ actionProvider }) => {
  const options = [
    { name: "Events", action: () => actionProvider.handleFetchEvents() },
    { name: "Upcoming Events", action: () =>  actionProvider.handleFetchUpcomingEvents() },
   
  ];

  const handleOptionClick = (action) => {
    action();
  };


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option.action)}
          className="m-2 flex items-center justify-between gap-2 rounded-lg px-4 py-3 transition duration-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold text-lg w-full"
        >
          <span>{option.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default OptionsWidget;
