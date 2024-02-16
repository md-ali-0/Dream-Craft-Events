import { LuFacebook, LuLinkedin, LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const TeamCards = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle
          heading={"Our Creative Team"}
          subHeading={"MEET THE TEAM"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/419066730_1380253985956858_5393115818291594078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEFpnOHIBmExiEkKlv99yDMQRCt06NP4gFBEK3To0_iAVEcSNK5NgbBd7Y9dD_wHg2yRY5N6zFUiwium_zofdab&_nc_ohc=BLMN9A5y0yQAX8PN3mr&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfCTG-KZmkBQ48YCeHgAbV42HYY_dcADeSZbmLmY3NxpVg&oe=65D18139"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Nizam Chowdhury</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link
                to="https://www.facebook.com/nizam.chowdhury.cs"
                target="_blank"
              >
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
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/245413586_3159306734345725_959244596654201671_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFCr7sCgfOzzn-SNqn06aEN168tgoV7OhXXry2ChXs6FfgNAu4lw_2cu8-SeF7LCveb_ylVGi4hOdbAz3HCCJqR&_nc_ohc=f-WhI3WQ0JIAX_WvUEP&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfAonJaI9c4mHBmx59lWw-SK3VV9bgYtDsfrj0stFbSohg&oe=65D13A58"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Saikat Singha</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/singha.saikat" target="_blank">
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
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Md. Rakibul Hasan</h3>
            <p className="text-gray-500 font-normal py-2">
              I`&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link
                to="https://www.facebook.com/100008261679338/"
                target="_blank"
              >
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
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://1.bp.blogspot.com/-HoyT-d9JX0g/YUtRefQcHLI/AAAAAAAAk9w/P-NTrf0jPColdcKjKy2XGAVAjLjbQUyIQCLcBGAsYHQ/s16000-rw/50%2B%252B%2BIndian%2BHijab%2BGirl%2BDP%2Bfor%2BInstagram%2BPage%2Bwith%2BCaption%2B%252825%2529.jpg"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Neelima Sultana</h3>
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
                Product Designer
              </p>
            </div>
          </div>
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-1/106010102_2598189153781060_14873953383681052_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeE2GD6V3kX9ak4j-SW-2b0d6_L6gfAOqjTr8vqB8A6qNFthz6Vfv_Ai74hiid3_iMNUaU8WoJmfxtsseqk_a8mk&_nc_ohc=GRpxl_Hsm_wAX_UdQb_&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBFgW_Ynn4t6_Bl-adOCO7358lv1cHnjzJPux7jEOVj4Q&oe=65F4716F"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Mohammad Ali</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/mohammad.7060" target="_blank">
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
                Web Developer
              </p>
            </div>
          </div>
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/268144853_983824599147942_7820454297340573291_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGFO73BLsaxucpdFp4kEQvLyfe4tojVR-DJ97i2iNVH4CM4bWgK1cN0etzODAeDWNOBgRxI7d_2ZSfkr6mg11cO&_nc_ohc=ZBDjbtYaCSYAX-qt5xh&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfCScNe1fTmCUgUHy5DqLSTURTrJ7g7ILvDMdp-VatHQkQ&oe=65D1645F"
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Abdullah Mamun</h3>
            <p className="text-gray-500 font-normal py-2">
              I`&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/aamamun.360" target="_blank">
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
                Graphic Designer
              </p>
            </div>
          </div>
          {/* single team card end */}
        </div>
      </Container>
    </section>
  );
};

export default TeamCards;
