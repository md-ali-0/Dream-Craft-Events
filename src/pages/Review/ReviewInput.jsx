import toast from 'react-hot-toast';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import img from '../../assets/logo/dream-craft.png'

const ReviewInput = () => {
  const axios = useAxiosPublic();
  // const navigate = useNavigate();
  const { user } = useAuth();
  const email = user?.email;
  const today = new Date();
  const time = today.toLocaleString();

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!user) {
      // If user is not logged in, redirect to login page
      // navigate('/login');
      toast.error(
        "Please Log in first!"
      );
      return;
    }


    const form = e.target;
    const text = form.text.value;
    const rating = form.rating.value;
    const name = form.name.value;

    const object = { text, rating, name, email, time };
    console.log(object);

    axios.post("/review", object).then((res) => {
      console.log(res.data);
      form.reset()
      toast.success('Thanks for your review😊')
    });
  };

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-center items-center md:w-1/3">
        <img  className="hidden md:flex" src={img} alt="" />
        <h2 className="hidden md:flex text-xl w-4/5 mx-auto font-semibold">“People don’t buy goods or services, they buy relations, stories, and magic”. Whether it’s a wedding event, corporate event, or birthday event.</h2>
      </div>
      <div className="bg-gray-100 rounded-lg py-2 md:w-2/3">
        <h2 className="text-2xl text-center p-2 font-semibold">
          Send us a Review
        </h2>
        <form onSubmit={handleSubmitReview} className="grid justify-center">
          <label className="label  justify-center"></label>
          <div className=" ">
            <div className="ml-3">
              <span className="label-text font-serif">Name</span>
              <textarea
                className=" flex justify-center p-2 rounded-lg border border-primary mx-auto "
                maxLength="30"
                name="name"
                cols="50"
                required
              ></textarea>
            </div>
            <div className="ml-3">
              <span className="label-text font-serif">Write review</span>
              <textarea
                className=" flex justify-center p-2 rounded-lg border border-primary mx-auto "
                maxLength="200"
                name="text"
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>

            <div className=" w-4/5 mx-auto mt-3 border-red-600">
              <label>Ratings</label>
              <select name="rating" className="w-full">
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Send"
            className=" bg-red-700 text-white hover:bg-slate-600  w-1/3 mx-auto p-2 cursor-pointer rounded-lg mt-2"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewInput;
