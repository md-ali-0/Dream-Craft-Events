import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import About from "../pages/about/About";
import Booking from "../pages/bookings/Booking";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";

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
      }
    ],
  },
]);

export default Router;
