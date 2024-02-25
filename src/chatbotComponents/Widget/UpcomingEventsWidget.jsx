import React, { useEffect, useState } from 'react';

const UpcomingEventsWidget = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the first 5 todos from the API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setEvents(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []); // The empty array ensures this effect runs once on mount

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">Upcoming Events</h2>
        <ul>
          {events.map(event => (
            <li key={event.id} className="text-sm text-gray-600 mt-2">
              {event.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEventsWidget;
