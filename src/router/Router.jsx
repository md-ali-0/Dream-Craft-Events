import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import About from "../pages/about/About";
import Booking from "../pages/bookings/Booking";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Contact from "../pages/contact/Contact";
import EventDetails from "../pages/eventDetails/EventDetails";
import Houses from "../components/cards/Houses";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/event-details',
        element: <EventDetails/>
      }
     
    ],
  },
]);

export default Router;
