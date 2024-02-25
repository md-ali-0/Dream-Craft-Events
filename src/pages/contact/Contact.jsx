import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import logo from '../../assets/logo/dream-craft.png'
import useAuth from '../../hooks/useAuth';

const Contact = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    if(!user){
      return
    }
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mt-5 underline">Contact Us</h2>
      <div className="mt-10 p-5 flex flex-col md:flex-row max-w-5xl mx-auto text-black ">
        <div className=" md:w-1/2">
          <img src={logo} alt="" className="w-32" />
          <h2 className="text-2xl font-semibold  mb-3">Address</h2>
          <hr className="w-32 " />
          <h2 className="text-2xl font-semibold">+44 20 3519 2700</h2>
          <p className="text-base mb-3">Book online or call</p>
          <h2 className="text-2xl font-semibold">contact@dreamcraft.com</h2>
          <div className="flex items-center ">
            <p className="text-base mb-3">
              Send us an email or use contact form
            </p>
            <AiOutlineArrowRight className="text-xl ml-2 "></AiOutlineArrowRight>
          </div>
          <h2 className="text-2xl font-semibold">Our address</h2>
          <p className="text-base mb-3">
            Banani, Dhaka <br /> Bangladesh
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 md:ml-20">
          <h2 className="text-2xl font-semibold ">SEND US A MESSAGE</h2>
          <hr className="w-52 " />
          <form onSubmit={handleSubmit} className="">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 outline-none border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@dreamcraft.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block p-3 w-full text-sm  outline-none bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm  outline-none bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center  text-white w-1/2 mx-auto mt-2 p-2 rounded-lg bg-gradient-to-r from-rose-700 to-pink-600  hover:bg-slate-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
