const UpcomingEventsWidget = ({ data }) => {
  const events = data?.events || [];

  return (
    <div className="max-w-md mx-auto bg-rose-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="text-sm text-gray-600 mt-2">
              <span className="font-semibold">{event.title}</span> - <span className="text-gray-500">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEventsWidget;
