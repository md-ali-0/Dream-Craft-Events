const EventCard = ({ event }) => {
    const { title, image, date, location } = event;
    return (
        <div>
            <img src={image} alt={title} />
            <div className="flex justify-between">
                <p>{date}</p>
                <p>{location}</p>
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default EventCard;