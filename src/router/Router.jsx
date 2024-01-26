import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import About from "../pages/about/About";
import Booking from "../pages/bookings/Booking";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import EventDetails from "../pages/eventDetails/EventDetails";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
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
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: '/event-details',
        element: <EventDetails/>
      },

      {
        path: "/shop",
        element: <Shop></Shop>
      }
     
    ],
  },
]);

export default Router;
