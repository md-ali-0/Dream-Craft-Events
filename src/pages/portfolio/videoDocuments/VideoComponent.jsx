import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

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
    <div className="md:flex flex-col items-center justify-center gap-8  h-[70vh] bg-gradient-to-r from-blue-400 to-purple-400 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 sm:text-left">How We Work</h2>
      <div className="max-w-md text-center sm:text-left">
        <p className="text-lg">
          No matter if you&apos;re organizing a corporate event, a wedding, or a special celebration, our team possesses the expertise and resources to ensure its success.
        </p>
      </div>
      <div className="flex-shrink-0 text-center">
        <button
          onClick={handleWatchVideo}
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
          data-aos="zoom-in"
          data-aos-delay="70"
          data-aos-duration="3500"
        >
          Watch Video
        </button>
      </div>

      {/* Video Modal */}
      {isVideoVisible && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
          <button
            className="absolute top-0 right-0 m-4 text-blue-500 text-2xl"
            onClick={handleVideoClose}
          >
            <BsX />
          </button>
          {/* Replace the <video> element with an <iframe> for YouTube */}
          <iframe
            className="md:w-full md:h-full lg:w-[55%] lg:h-[70%]"
            src="https://www.youtube.com/embed/eTl2Cxb74r0"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
