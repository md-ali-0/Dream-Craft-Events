import  { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import videoSource from '../../../assets/testVideo/test.mp4'; // Replace with the actual path to your video file
import { BsX } from 'react-icons/bs'; // Import the close icon from react-icons library
import Container from '../../../components/container/Container';

const VideoComponent = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleWatchVideo = () => {
    setIsVideoVisible(true);
  };

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };

  return (
    <Container>
    <div className="flex items-center justify-between h-96 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-4">How We Work</h2>
        <p className="text-lg">
          A brief description of your event management process and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex-shrink-0">
        <button
          onClick={handleWatchVideo}
          className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 focus:outline-none"
          data-aos="zoom-in"
        >
          Watch Video
        </button>
      </div>

      {/* Video Modal */}
      {isVideoVisible && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-75" onClick={handleVideoClose}></div>
          <div className="relative z-10">
            <button className="absolute top-0 right-0 m-4 text-blue-500 text-2xl" onClick={handleVideoClose}>
              <BsX />
            </button>
            <video
              className="w-full h-full"
              controls
              autoPlay
              loop
              muted
              preload="auto"
              src={videoSource}
            />
          </div>
        </div>
      )}
    </div>
    </Container>
  );
};

export default VideoComponent;
