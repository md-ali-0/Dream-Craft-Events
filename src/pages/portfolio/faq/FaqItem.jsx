import { useState } from "react";
import Container from "../../../components/container/Container";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer bg-gray-200 p-4 rounded-md"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="bg-white p-4 mt-2 rounded-md">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What types of events do you specialize in?",
      answer:
        "We specialize in a wide range of events including corporate conferences, trade shows, weddings, galas, and community gatherings.",
    },
    {
      question: "Can you assist with event design and decor",
      answer:
        "Yes, we offer event design and decor services to transform venues into stunning spaces. Our talented team works closely with clients to understand their vision and create a cohesive design concept that aligns with their event theme and goals.",
    },
    {
      question: "What sets your event services apart from others? ",
      answer:
        "Our event services stand out due to our innovative approach, personalized attention, and commitment to exceeding client expectations. We focus on creating unique and unforgettable experiences tailored to each client's specific needs.",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center my-20 gap-8 md:gap-32">
        <h2 className="text-4xl mb-4 md:mb-0 md:mr-8 text-center md:text-left">
          Most <br /> Asked <br /> Questions
        </h2>
        <div>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
