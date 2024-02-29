import { useState } from "react";
import Container from "../../../components/container/Container";

const Accordion4 = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const datas = [
    {
      title: "What types of events do you specialize in?",
      color: "green",
      description:
        'We specialize in a wide range of events including corporate conferences, trade shows, weddings, galas, and community gatherings.',
    },
    {
      title: "Can you assist with event design and decor?",
      color: "sky",
      description:
        "Yes, we offer event design and decor services to transform venues into stunning spaces. Our talented team works closely with clients to understand their vision and create a cohesive design concept that aligns with their event theme and goals.",
    },
    {
      title: "What sets your event services apart from others? ",
      color: "purple",
      description:
        "Our event services stand out due to our innovative approach, personalized attention, and commitment to exceeding client expectations. We focus on creating unique and unforgettable experiences tailored to each client's specific needs.",
    },
    {
      title: "Do you provide catering services for events?",
      color: "amber",
      description:
        "Absolutely! We offer a comprehensive catering service to complement our event offerings. From hors d'oeuvres to full-course meals, our culinary team crafts delicious menus that cater to diverse tastes and dietary preferences, ensuring your event is a culinary delight.",
    },
    {
      title: "Are audiovisual services available for events?",
      color: "red",
      description:
        "Yes, we provide top-notch audiovisual services to enhance your event experience. From sound systems to lighting setups, our AV experts ensure crystal-clear sound and stunning visuals, creating an immersive atmosphere that captivates attendees and leaves a lasting impression.",
    },
  ];
  return (
    <Container>

      <div className="grid grid-cols-1 lg:flex my-20">
      <div className="lg:w-[40%] flex justify-center items-center">
      <h2 className="text-4xl mb-4 md:mb-0 md:mr-8 text-center md:text-left font-medium text-slate-600">
          Most <br /> Asked <br /> Questions
        </h2>
      </div>

      <div className="space-y-4 p-2 md:p-6 lg:w-[60%]">
        {datas?.map((data, idx) => (
          <div key={idx}>
            {/* header / Title */}
            <div
              onClick={() => handleToggle(idx)}
              className={`px-4 md:px-8 py-6 ${
                idx === 0
                  ? "bg-green-50 border-green-500"
                  : idx === 1
                  ? "bg-sky-50 border-sky-500"
                  : idx === 2
                  ? "bg-purple-50 border-purple-500"
                  : idx === 3
                  ? "bg-amber-50 border-amber-500"
                  : idx === 4
                  ? "bg-red-50 border-red-500"
                  : "bg-orange-50 border-orange-500"
              } border-l-[3px] cursor-pointer`}
            >
              <div className="flex items-center">
                <span>
                  <svg
                    className={`mr-4 ${
                      idx === 0
                        ? "fill-green-900"
                        : idx === 1
                        ? "fill-sky-900"
                        : idx === 2
                        ? "fill-purple-900"
                        : idx === 3
                        ? "fill-amber-900"
                        : idx === 4
                        ? "fill-red-900"
                        : "fill-orange-900"
                    } shrink-0`}
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
                <h4
                  className={`${
                    idx === 0
                      ? "text-green-900"
                      : idx === 1
                      ? "text-sky-900"
                      : idx === 2
                      ? "text-purple-900"
                      : idx === 3
                      ? "text-amber-900"
                      : idx === 4
                      ? "text-red-900"
                      : "text-orange-900"
                  } text-xl`}
                >
                  {data.title}
                </h4>
              </div>
            </div>
            {/* body / content  */}
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                isOpen === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${
                    idx === 0
                      ? "text-green-900 bg-green-50 border-green-500"
                      : idx === 1
                      ? "text-sky-900 bg-sky-50 border-sky-500"
                      : idx === 2
                      ? "text-purple-900 bg-purple-50 border-purple-500"
                      : idx === 3
                      ? "text-amber-900 bg-amber-50 border-amber-500"
                      : idx === 4
                      ? "text-red-900 bg-red-50 border-red-500"
                      : "text-orange-900 bg-orange-50 border-orange-500"
                  } `}
                >
                  {data?.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>


    </Container>
  );
};

export default Accordion4;
