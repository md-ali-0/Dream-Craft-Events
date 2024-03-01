import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";

const EventCards = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const goToAllServices = () => {
    navigate("/booking");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <Container>
      <div className="space-y-8">
        <div className="flex justify-between">
          <SectionTitle
            heading={"Our Services"}
            subHeading={"explore our services"}
          />
          <div className="self-center">
            <button
              onClick={goToAllServices}
              className="text-xl border px-6 py-2 rounded-3xl hover:bg-gradient-to-r from-purple-500 to-emerald-300 hover:text-white border-cyan-500"
            >
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-6">
        <div className="shadow-slate-300 shadow-md rounded-md">
          <div
            className="h-60 relative"
            style={{
              backgroundImage: "url('https://i.ibb.co/YbNwSg0/birthday.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "6px",
            }}
          >
            {/* <div className="bg-white px-4 py-2 absolute top-3 left-3  ">
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-xl tracking-widest">
                $700
              </h2>
            </div> */}
            <div className="absolute bottom-3 left-4">
              <h3 className="text-xl tracking-widest bg-black inline-block  bg-opacity-60 px-3 text-white font-semibold">
                PARTIES
              </h3>
              <h2 className="text-2xl bg-black  bg-opacity-60 px-3 mt-1 text-white font-bold">
                Birthday Parties
              </h2>
            </div>
          </div>
          <p className="p-5 text-lg text-gray-600">
            Our event company specializes in meticulously planning, ensuring a
            seamless and unforgettable experience for you and your guests.
          </p>
        </div>
        <div className="shadow-slate-300 shadow-md rounded-md">
          <div
            className="h-60 relative hover:tr"
            style={{
              backgroundImage: "url('https://i.ibb.co/Lg6zpY1/family-1.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "6px",
            }}
          >
            {/* <div className="bg-white px-4 py-2 absolute top-3 left-3  ">
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-xl tracking-widest">
                $800
              </h2>
            </div> */}
            <div className="absolute bottom-3 left-4">
              <h3 className="text-xl tracking-widest bg-black inline-block  bg-opacity-60 px-3 text-white font-semibold">
                FAMILY
              </h3>
              <h2 className="text-2xl bg-black  bg-opacity-60 px-3 mt-1 text-white font-bold ">
                Family Celebration
              </h2>
            </div>
          </div>
          <p className="p-5 text-lg text-gray-600">
            Our talented team of designers and decorators transform any space
            into a stunning setting that aligns perfectly with your desired
            ambiance.
          </p>
        </div>
        <div className="shadow-slate-300 shadow-md rounded-md">
          <div
            className="h-60 relative hover:tr"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1622675205169-901710ac8643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "6px",
            }}
          >
            {/* <div className="bg-white px-4 py-2 absolute top-3 left-3  ">
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-xl tracking-widest">
                $1100
              </h2>
            </div> */}
            <div className="absolute bottom-3 left-4">
              <h3 className="text-xl tracking-widest bg-black inline-block bg-opacity-60 px-3 text-white font-semibold">
                CONFERENCES
              </h3>
              <h2 className="text-2xl mt-1 bg-black bg-opacity-60 px-3 text-white font-bold">
                Leadership Forum
              </h2>
            </div>
          </div>
          <p className="p-5 text-lg text-gray-600">
            Join us and become part of a vibrant community dedicated to driving
            positive change and making a lasting impact in the world of
            leadership.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default EventCards;
