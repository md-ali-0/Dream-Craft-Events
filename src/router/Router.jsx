import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import About from "../pages/about/About";
import Events from "../pages/allEvents/Events";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Booking from "../pages/bookings/Booking";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import EventDetails from "../pages/eventDetails/EventDetails";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Schedule from "../pages/schedule/Schedule";
import Shop from "../pages/shop/Shop";


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
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      },
      {
        path: '/schedule',
        element: <Schedule/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: '/event-details',
        element: <EventDetails />
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      }

    ],
  },
]);

export default Router;
