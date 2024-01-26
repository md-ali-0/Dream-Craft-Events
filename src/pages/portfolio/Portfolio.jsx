import Faq from "./faq/FaqItem";
import Gallery from "./gallery/Gallery";
import Banner from "./portfolio_banner/PortfolioBanner";
import VideoComponent from "./videoDocuments/VideoComponent";

const Portfolio = () => {
    return (
        <div className="mt-2">
            <Banner/>
            <Gallery/>
            <VideoComponent/>
            <Faq/>
        </div>
    );
};

export default Portfolio;