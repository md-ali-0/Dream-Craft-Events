import Container from "../../components/container/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";

const NewsLetter = () => {
  const axios = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    //console.log(email);
    const newsMAil = { email };

    axios.post("/news", newsMAil).then((res) => {
      //console.log(res.data);
      form.reset();
      toast.success("Thanks for connecting with us😊");
    });
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[45vh] bg-fixed"
      style={{
        backgroundImage: `url('https://i.ibb.co/b1cnRPs/getty-479977238-253066.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-60 h-full p-10 ">
        <Container>
          <div className="flex flex-col md:flex-row md:gap-6">
            <p className="uppercase lg:text-2xl font-semibold text-slate-300 text-center flex justify-center items-center">
              FOR EXCLUSIVE BENEFITS, INSIDER NEWS AND OUR UPCOMING EVENTS SUBSCRIBE
              for our newsletter
            </p>

            <div className="mt-5 md:mt-20 lg:mt-10">
              <form onSubmit={handleSubmit} className="flex justify-center pb-5">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="border p-3 w-72"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-primary text-white p-3 rounded-r-lg cursor-pointer"
                />
              </form>
              <p className="text-white text-center px-10 hidden lg:flex">
                {" "}
                Your personal data is to be used by the legal entity Dream Craft
                Events in order to provide you with the Dream Craft Events services
                that you requested, to send you information on Dream Craft Events
                activities and services and to provide offers tailored to your
                interests.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsLetter;
