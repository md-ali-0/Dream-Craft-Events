function EventsWidget(props) {
    const events = props.data || [];
  
    if (events.length === 0) {
      return <div>No events to display.</div>;
    }
  
    return (
      <ul>
        {props.data.events.map((event, index) => (
          <li key={index} className="mb-4 p-4 bg-rose-200 border rounded shadow-md">
          {event.title}
        </li>
        ))}
      </ul>
    );
  }
  
  export default EventsWidget;
  