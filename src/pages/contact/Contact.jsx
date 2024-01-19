import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@dreamcraft.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>

            <button type="submit" className="py-2 px-5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>

            

          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
