import backgroundImage from "../images/img1.png";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-[70vh] text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-lg md:text-xl text-slate-200">
          A diverse collection of events, ranging from sophisticated soirees to{" "}
          <br />
          vibrant and energetic gatherings. Our events cater to every occasion{" "}
          <br />
          and guest, ensuring a unique and memorable experience for all.
        </p>
      </div>
    </div>
  );
};

export default Banner;
