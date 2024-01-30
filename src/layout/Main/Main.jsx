import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;