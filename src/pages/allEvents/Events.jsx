import Container from "../../components/container/Container";

const Events = () => {
    const events = [
        {
            "id": 1,
            "title": "Tech Conference",
            "date": "2024-03-15",
            "location": "City Convention Center",
            "description": "International conference on the latest technology trends.",
            "image": "https://example.com/conference_image.jpg"
        },
        {
            "id": 2,
            "title": "Music Festival",
            "date": "2024-06-22",
            "location": "Greenfield Park",
            "description": "Three-day music festival featuring various genres and artists.",
            "image": "https://example.com/music_festival_image.jpg"
        },
        {
            "id": 3,
            "title": "Community Cleanup",
            "date": "2024-04-10",
            "location": "Citywide",
            "description": "Join us in making our community cleaner and greener.",
            "image": "https://example.com/cleanup_day_image.jpg"
        },
        {
            "id": 4,
            "title": "Art Exhibition",
            "date": "2024-05-18",
            "location": "Downtown Gallery",
            "description": "Showcasing local and international artists.",
            "image": "https://example.com/art_exhibition_image.jpg"
        },
        {
            "id": 5,
            "title": "Food Festival",
            "date": "2024-08-07",
            "location": "Culinary Square",
            "description": "Explore a variety of cuisines from around the world.",
            "image": "https://example.com/food_festival_image.jpg"
        },
        {
            "id": 6,
            "title": "Film Screening",
            "date": "2024-09-30",
            "location": "City Cinema",
            "description": "A night of independent and international films.",
            "image": "https://example.com/film_screening_image.jpg"
        }
    ]

    return (
        <Container>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-dark_01 mt-5">Our Events</h2>
        </Container>
    );
};

export default Events;