import { LuFacebook, LuLinkedin, LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const TeamCards = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle  heading={'Our Creative Team'} subHeading={'MEET THE TEAM'}/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://assets-global.website-files.com/6481774ac8e2ed2234eb168b/6486cf37d741377732cdfa68_team%20member%20image%20small-p-500.webp"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Jane Cooper</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://facebook.com" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://linkedIn.com" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                CEO & Founder
              </p>
            </div>
          </div>
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://assets-global.website-files.com/6481774ac8e2ed2234eb168b/6486cf10cb980812694c0822_team%20member%20image.webp"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Jane Cooper</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://facebook.com" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://linkedIn.com" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Creative Director
              </p>
            </div>
          </div>
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://assets-global.website-files.com/6481774ac8e2ed2234eb168b/6486cf59ff89f6845bdc4aac_team%20image-p-500.webp"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Jane Cooper</h3>
            <p className="text-gray-500 font-normal py-2">
              I`&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://facebook.com" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://linkedIn.com" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Manager
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamCards;
