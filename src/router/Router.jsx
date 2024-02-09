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
import DashboardAdminHome from "../pages/dashboard/admin/Home/DashboardAdminHome";
import Profile from "../pages/dashboard/profile/Profile";
import Settings from "../pages/dashboard/settings/Settings";
import ErrorPage from "../pages/error/ErrorPage";
import EventDetails from "../pages/eventDetails/EventDetails";
import Home from "../pages/home/Home";
import PaymentPage from "../pages/payment/PaymentPage";
import Portfolio from "../pages/portfolio/Portfolio";
import Schedule from "../pages/schedule/Schedule";
import Shop from "../pages/shop/Shop";
import UpdateEvent from "../pages/updateEvent/UpdateEvent";
import AdminRouter from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
        {
            path: '/dashboard',
            element: <PrivateRoute><DashboardHome/></PrivateRoute>
        },
        {
          path:'addEvent',
          element:<PrivateRoute><AddEvent/></PrivateRoute>
        },
        {
          path:'updateEvent',
          element:<PrivateRoute><UpdateEvent/></PrivateRoute>
        },
        {
          path: 'settings',
          element: <PrivateRoute><Settings/></PrivateRoute>
        },
        {
          path: 'profile',
          element: <PrivateRoute><Profile/></PrivateRoute>
        },
        {
          path: 'admin',
          element: <AdminRouter><DashboardAdminHome/></AdminRouter>
        },
    ]
},
]);

export default Router;
