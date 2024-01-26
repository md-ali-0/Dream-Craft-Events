import Gallery from "./gallery/Gallery";
import Banner from "./portfolio_banner/PortfolioBanner";
import VideoComponent from "./videoDocuments/VideoComponent";

const Portfolio = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <VideoComponent/>
        </div>
    );
};

export default Portfolio;