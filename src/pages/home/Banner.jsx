import { Link } from "react-router-dom";
import banner from '../../assets/banner/banner-img.png';
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
            <div className="flex flex-col space-y-3 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                onClick={scrollToPrice}
                className="px-5 py-3 text-lg font-semibold rounded bg-primary text-white"
              >
                Get Started
              </button>
              <Link
                rel="noopener noreferrer"
                to="/contact"
                className="px-8 py-3 text-lg font-semibold border border-primary text-primary rounded"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={banner}
              alt=""
              className="object-contain h-72 md:w-[500px] md:h-[500px] animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-linear animate-normal"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
