// ReviewInput.jsx

import { useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const ReviewInput = ({ refetch }) => {
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email;
  const today = new Date();
  const time = today.toLocaleString();

  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please Log in first!");
      return;
    }

    const form = e.target;
    const text = form.text.value;
    const name = form.name.value;

    const object = { text, rating, name, email, time };

    axios.post("/review", object).then((res) => {
      form.reset();
      toast.success('Thanks for your review😊');
      refetch(); // Call refetch after successfully submitting the review
    });
  };

  return (
    <>
      <div className='mt-10 mb-5'> <h2 className="text-2xl text-center p-2 font-semibold">Give Us Your Feedback</h2></div>
      <div className="flex justify-center  ">
        <div className="bg-slate-100 rounded-lg pt-7 py-2 w-full md:w-2/3 md:px-6">
          <form onSubmit={handleSubmitReview} className="grid justify-center">
            <div className="md:w-4/5 mx-auto">

            <div className="font-bold w-full md:w-4/5 mx-auto mt-3 border-red-600 text-center">
              <label>Ratings</label>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <button key={value} type="button" className={`text-2xl focus:outline-none ${value <= rating ? 'text-yellow-400' : 'text-gray-300'}`} onClick={() => handleStarClick(value)}>★</button>
                ))}
              </div>
              <input type="hidden" name="rating" value={rating} />
            </div>

              <label className="label-text font-serif">Name</label>
              <textarea className="w-full p-2 rounded-lg border border-primary mx-auto" maxLength="30" name="name" rows="1" placeholder="Your Name" required></textarea>
            </div>
            <div className="md:w-4/5 mx-auto mt-3">
              <label className="label-text font-serif">Write review</label>
              <textarea className="w-full p-2 rounded-lg border border-primary mx-auto" maxLength="200" name="text" rows="4" placeholder="Write a review..." required></textarea>
            </div>



            <input type="submit" value="Add Review" className="text-white w-full md:w-auto mx-auto mt-4 p-2 bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 lg:w-auto hover:bg-red-600 focus:ring-4 focus:ring-opacity-50 rounded-lg px-5 mb-5" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewInput;
