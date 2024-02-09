import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import organizer from '../../../assets/Organizer/organizer.jpg';


const Organizer = () => {
    return (
        <div className='bg-white my-16'>
            <Container>
                <div className='flex flex-col md:flex-row gap-10 items-center'>
                    <div className='flex-1'>
                        <img className='rounded-md' src={organizer} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-2xl text-dark_01 md:text-5xl font-semibold'>Host Your Event with Us</h2>
                        <p className='text-secondary text-xl my-4 text-justify'>
                            Planning an event can be daunting, but it doesn&apos;t have to be. At Dream Craft Events, we specialize in bringing your vision to life. From corporate conferences to intimate gatherings, our dedicated team is committed to ensuring every detail is perfect. With years of experience and a passion for excellence, we offer unparalleled expertise in event management, logistics, and coordination. Let us handle the stress so you can focus on enjoying your event to the fullest. Contact us today to start planning your next unforgettable event.
                        </p>
                        <Link to='request-organizer'>
                            <button className="bg-primary px-4 py-2 rounded-md text-white uppercase">Request Organizer</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Organizer;