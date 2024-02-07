import { useState } from "react";
import "./banner.css"; // Import your CSS file here
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import { Link } from "react-router-dom";

const MagicBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  return (
    <div className="mt-10">
      <div className="carousel">
        <div className="list">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              className="item"
              key={index}
              style={{ display: currentSlide === index ? "block" : "none" }}
            >
              <img className="brightness-75" src={img} alt={`Slide ${index + 1}`} />
              <div className="content">
                <div className="author backdrop-brightness-50 w-1/2">
                  <p className="pl-4">Dream Craft Events</p>
                </div>
                <div className="title">Recent Events</div>
                <div className="topic">Book Now</div>
                <div className="w-2/3 text-justify backdrop-brightness-50">
                  <p className="px-2">
                    A diverse collection of events, ranging from sophisticated
                    soirees to vibrant and energetic gatherings. Our events cater
                    to every occasion and guest, ensuring a unique and memorable
                    experience for all.
                  </p>
                </div>
                <Link to="/events">
                  <button
                    type="button"
                    className="mt-16 text-white bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-7 py-2 text-center  mb-2"
                  >
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Thumbnails */}
        <div className="thumbnail">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              key={index}
              className={`item ${currentSlide === index ? 'border-4 rounded-3xl border-rose-500' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title text-slate-800 ">Event name</div>
                <div className="description text-black">Description</div>
              </div>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            {"<"}
          </button>
          <button id="next" onClick={nextSlide}>
            {">"}
          </button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
};

export default MagicBanner;
