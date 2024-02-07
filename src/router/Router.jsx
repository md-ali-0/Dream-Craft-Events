import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dash/Dashboard";
import Main from "../layout/Main/Main";
import About from "../pages/about/About";
import AddEvent from "../pages/addEvent/AddEvent";
import Events from "../pages/allEvents/Events";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Booking from "../pages/bookings/Booking";
import Contact from "../pages/contact/Contact";
import CustomEvent from "../pages/customEvent/CustomEvent";
import DashboardHome from "../pages/dashboard/Home/DashboardHome";
import Profile from "../pages/dashboard/profile/Profile";
import Settings from "../pages/dashboard/settings/Settings";
import ErrorPage from "../pages/error/ErrorPage";
import EventDetails from "../pages/eventDetails/EventDetails";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Schedule from "../pages/schedule/Schedule";
import Shop from "../pages/shop/Shop";
import UpdateEvent from "../pages/updateEvent/UpdateEvent";
import PaymentPage from "../pages/payment/PaymentPage";


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
        element: <Contact />
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
        path: '/schedule',
        element: <Schedule />
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
        path: '/event-details/:_id',
        element: <EventDetails />
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: '/create-your-event',
        element: <CustomEvent/>
      },
      {
        path: '/payment/:_id',
        element: <PaymentPage/>
      }

    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
        {
            path: '/dashboard',
            element: <DashboardHome/>
        },
        {
          path:'addEvent',
          element:<AddEvent></AddEvent>
        },
        {
          path:'updateEvent',
          element:<UpdateEvent></UpdateEvent>
        },
        {
          path: 'settings',
          element: <Settings/>
        },
        {
          path: 'profile',
          element: <Profile/>
        },
    ]
},
]);

export default Router;
