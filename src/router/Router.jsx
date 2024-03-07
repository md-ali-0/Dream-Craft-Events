import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dash/Dashboard";
import Main from "../layout/Main/Main";
import RequestOrganizer from "../pages/RequestOrganizer/RequestOrganizer";
import About from "../pages/about/About";
import Events from "../pages/allEvents/Events";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Booking from "../pages/bookings/Booking";
import Contact from "../pages/contact/Contact";
import CustomEvent from "../pages/customEvent/CustomEvent";
import DashboardHome from "../pages/dashboard/Home/DashboardHome";
import OrganizerRequest from "../pages/dashboard/OrganizerRequest/OrganizerRequest";
import DashboardAdminHome from "../pages/dashboard/admin/Home/DashboardAdminHome";
import AddEvent from "../pages/dashboard/admin/events/AddEvent";
import UpdateEvent from "../pages/dashboard/admin/events/UpdateEvent";
import Settings from "../pages/dashboard/admin/settings/Settings";
import Profile from "../pages/dashboard/profile/Profile";
import ErrorPage from "../pages/error/ErrorPage";
import EventDetails from "../pages/eventDetails/EventDetails";
import Home from "../pages/home/Home";
import PaymentPage from "../pages/payment/PaymentPage";
import Portfolio from "../pages/portfolio/Portfolio";
import Schedule from "../pages/schedule/Schedule";
import Shop from "../pages/shop/Shop";
import AdminRouter from "./AdminRoute";

import Cart from "../pages/dashboard/userDashboard/cart/cart";
import UserBookings from "../pages/dashboard/userDashboard/userBookings/UserBookings";
import Wishlist from "../pages/dashboard/userDashboard/wishlist/Wishlist";

import AllEvents from "../pages/dashboard/admin/events/AllEvents";
import AllUsers from "../pages/dashboard/admin/users/AllUsers";
import EditUser from "../pages/dashboard/admin/users/EditUser";
import MyCart from "../pages/shop/MyCart";
import PrivateRoute from "./PrivateRoute";

// eita Nizam kortece 
import AddProduct from "../pages/dashboard/admin/shop/AddProduct";
import AllProducts from "../pages/dashboard/admin/shop/AllProducts";
// import ProductOrders from "../pages/dashboard/admin/shop/ProductOrders";
import ShopOrders from "../pages/dashboard/admin/shop/ShopOrders";
// etotuku Nizam vai korce, piliz dont conflict


import CustomEventDashboard from "../pages/dashboard/CustomEvent/CustomEventDashboard";
import CustomEventBooking from "../pages/dashboard/userDashboard/CustomEventBook/CustomEventBooking";
import PaymentHistory from "../pages/dashboard/userDashboard/payment/PaymentHistory";
import Mails from "../pages/dashboard/admin/mails/Mails";
import CustomEventUser from "../pages/dashboard/CustomEvent/CustomEventUser";
import BookedTickets from "../pages/dashboard/admin/events/BookedTickets";
import PaymentSuccess from "../pages/payment/PaymentSuccess";
import PaymentFail from "../pages/payment/PaymentFail";

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
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/schedule",
                element: <Schedule />,
            },
            {
                path: "/schedule",
                element: <Schedule />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/events",
                element: <Events />,
            },
            {
                path: "/event-details/:_id",
                element: <EventDetails />,
            },
            {
                path: "/shop",
                element: <Shop></Shop>,
            },
            {
                path: "/create-your-event",
                element: <CustomEvent />,
            },
            {
                path: "/payment/:_id",
                element: <PaymentPage />,
            },
            {
                path: "/payment/success/:tranId",
                element: <PaymentSuccess />,
            },
            {
                path: "/payment/fail/:transId",
                element: <PaymentFail />,
            },
            {
                path: "/request-organizer",
                element: <RequestOrganizer />,
            },
            {
                path: "/my-cart",
                element: <MyCart />,
            }
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard/user",
                element: (
                    <PrivateRoute>
                        <DashboardHome />
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/custom-event-booking",
                element: (
                    <PrivateRoute>
                        <CustomEventBooking></CustomEventBooking>
                    </PrivateRoute>
                ),
            },
            {
                path: "add-event",
                element: (
                    <PrivateRoute>
                        <AddEvent />
                    </PrivateRoute>
                ),
            },
            {
                path: "edit-event/:id",
                loader: ({ params }) =>
                    fetch(
                        `https://dream-craft-server.vercel.app/event/${params.id}`
                    ),
                element: (
                    <PrivateRoute>
                        <UpdateEvent />
                    </PrivateRoute>
                ),
            },
            {
                path: "settings",
                element: (
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                ),
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "organizer-request",
                element: (
                    <PrivateRoute>
                        <OrganizerRequest />
                    </PrivateRoute>
                ),
            },
            {
                path: "custom-event-request",
                element: (
                    <AdminRouter>
                        <CustomEventDashboard />
                    </AdminRouter>
                ),
            },
            {
                path: "admin",
                element: (
                    <AdminRouter>
                        <DashboardAdminHome />
                    </AdminRouter>
                ),
            },
            {
                path: "wishList",
                element: (
                    <PrivateRoute>
                        <Wishlist />
                    </PrivateRoute>
                ),
            },
            {
                path: "customEvent",
                element: (
                    <PrivateRoute>
                        <CustomEventUser />
                    </PrivateRoute>
                ),
            },
            {
                path: "my-bookings",
                element: (
                    <PrivateRoute>
                        <UserBookings />
                    </PrivateRoute>
                ),
            },
            {
                path: "payment-history",
                element: (
                    <PrivateRoute>
                        <PaymentHistory></PaymentHistory>
                    </PrivateRoute>
                ),
            },
            {
                path: "cart",
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                ),
            },
            {
                path: "all-users",
                element: (
                    <AdminRouter>
                        <AllUsers />
                    </AdminRouter>
                ),
            },
            {
                path: "edit-user/:id",
                loader: ({ params }) =>
                    fetch(
                        `https://dream-craft-server.vercel.app/user/${params.id}`,
                        { method: "POST" }
                    ),
                element: (
                    <AdminRouter>
                        <EditUser />
                    </AdminRouter>
                ),
            },
            {
                path: "events",
                element: (
                    <AdminRouter>
                        <AllEvents />
                    </AdminRouter>
                ),
            },
            {
                path: "booked-tickets",
                element: (
                    <AdminRouter>
                        <BookedTickets />
                    </AdminRouter>
                ),
            },
            // eita Nizam kortece 
            {
                path: "add-product",
                element: (
                    <AdminRouter>
                        <AddProduct />
                    </AdminRouter>
                ),
            },
            {
                path: "products",
                element: (
                    <AdminRouter>
                        <AllProducts />
                    </AdminRouter>
                ),
            },
            {
                path: "product-orders",
                element: (
                    <AdminRouter>
                        {/* <ProductOrders></ProductOrders> */}
                        <ShopOrders></ShopOrders>
                    </AdminRouter>
                ),
            },
            {
                path: "all-mails",
                element: (
                    <AdminRouter>
                        <Mails></Mails>
                    </AdminRouter>
                ),
            },
            // etotuku Nizam vai korce, piliz dont conflict
        ],
    },
]);

export default Router;
