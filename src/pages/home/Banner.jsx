import { Link } from "react-router-dom";
import banner from '../../assets/banner/hero-figure1.png';
import Container from "../../components/container/Container";
const 
Banner = () => {
    const scrollToPrice = ()=>{
        const priceSection = document.getElementById('price')

        priceSection.scrollIntoView({'behavior':'smooth'})
    }
  return (
    <section className="py-5">
      <Container>
        <div className="flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold sm:text-5xl">
              Unleash the Power of{" "}
              <span className="text-primary">Perfectly</span> Executed Events
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Simplify event planning and booking with our seamless solutions.
              <br className="hidden md:inline lg:hidden" />
              From corporate gatherings to personal celebrations, we transform
              your vision into memorable experiences.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <button
                onClick={scrollToPrice}
                className="px-5 py-3 text-lg font-semibold rounded bg-primary text-white"
              >
                Get Started
              </button>
              <Link
                to="/contact"
                className="px-5 py-3 text-lg font-semibold border border-primary text-primary rounded"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 animate-updown">
            <img
              src={banner}
              alt=""
              className="object-contain h-72 md:w-[500px] md:h-[500px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
