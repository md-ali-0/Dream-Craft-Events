import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";
import ChatbotComponent from "../../chatbotComponents/Chatbot/ChatbotComponent.jsx"

const Main = () => {
    return (
        <>
            <Navbar/>
            <ChatbotComponent/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;