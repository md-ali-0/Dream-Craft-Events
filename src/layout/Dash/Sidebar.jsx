import PropTypes from "prop-types";
import logo from "../../assets/logo/logo-dark.png";
import Loading from "../../components/loading/Loading";
import SideBarMenuItem from "../../components/sidebar/SideBarMenuItem";
import SidebarSubMenu from "../../components/sidebar/SidebarSubMenu";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? "block" : "hidden"
                    }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col bg-[#0c1427] min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen
                    ? "translate-x-0 ease-out"
                    : "-translate-x-full ease-in"
                    }`}
            >
                <div className="flex items-center justify-center border-b border-gray-900 py-[18px]">
                    <Link to="/"><img src={logo} alt="" className="w-28" /></Link>
                </div>
                <div className="overflow-y-auto custom-scroll">
                    <nav className="mt-5 px-3">
                        <ul>
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Main
                            </h4>
                            {user?.role === "user" && (
                                <>
                                    <SideBarMenuItem
                                        menu={{
                                            name: "User Dashboard",
                                            icon: "LuCommand",
                                            path: "/dashboard/user",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Ticket Bookings",
                                            icon: "LuTicket",
                                            path: "/dashboard/my-bookings",
                                        }}
                                    />

                                    <SideBarMenuItem
                                        menu={{
                                            name: "Custom Events",
                                            icon: "LuUserCog",
                                            path: "/dashboard/customEvent",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Orders From Shop",
                                            icon: "LuShoppingCart",
                                            path: "/dashboard/cart",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Payment History",
                                            icon: "LuDollarSign",
                                            path: "/dashboard/payment-history",
                                        }}
                                    />
                                </>
                            )}
                            {user?.role === "admin" && (
                                <>
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Dashboard",
                                            icon: "LuCommand",
                                            path: "/dashboard/admin",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Mails",
                                            icon: "LuMailCheck",
                                            path: "/dashboard/all-mails",
                                        }}
                                    />
                                    <SidebarSubMenu
                                        menu={{
                                            name: "Events",
                                            icon: "LuCalendarPlus",
                                        }}
                                        subMenu={[
                                            {
                                                name: "Booked Tickets",
                                                path: "booked-tickets",
                                            },
                                            {
                                                name: "Add Event",
                                                path: "add-event",
                                            },
                                            {
                                                name: "All Events",
                                                path: "events",
                                            },
                                        ]}
                                    ></SidebarSubMenu>

                                    <SidebarSubMenu
                                        menu={{
                                            name: "Shop",
                                            icon: "LuShoppingBag",
                                        }}
                                        subMenu={[
                                            {
                                                name: "Product Orders",
                                                path: "product-orders",
                                            },
                                            {
                                                name: "Add Product",
                                                path: "add-product",
                                            },
                                            {
                                                name: "All Product",
                                                path: "products",
                                            },
                                        ]}
                                    ></SidebarSubMenu>

                                    <SideBarMenuItem
                                        menu={{
                                            name: "Organizer Request",
                                            icon: "LuUserCheck",
                                            path: "/dashboard/organizer-request",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Custom Event Request",
                                            icon: "LuUserCog",
                                            path: "/dashboard/custom-event-request",
                                        }}
                                    />
                                </>
                            )}
                            {user?.role === "organizer" && (
                                <>
                                    <SideBarMenuItem
                                        menu={{
                                            name: "User Dashboard",
                                            icon: "LuCommand",
                                            path: "/dashboard/user",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Ticket Bookings",
                                            icon: "LuTicket",
                                            path: "/dashboard/my-bookings",
                                        }}
                                    />

                                    <SideBarMenuItem
                                        menu={{
                                            name: "Custom Events",
                                            icon: "LuUserCog",
                                            path: "/dashboard/customEvent",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Orders From Shop",
                                            icon: "LuShoppingCart",
                                            path: "/dashboard/cart",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Payment History",
                                            icon: "LuDollarSign",
                                            path: "/dashboard/payment-history",
                                        }}
                                    />                                   
                                    <SidebarSubMenu
                                        menu={{
                                            name: "Events",
                                            icon: "LuCalendarPlus",
                                        }}
                                        subMenu={[
                                            {
                                                name: "Add Event",
                                                path: "add-event",
                                            },
                                        ]}
                                    ></SidebarSubMenu>
                                </>
                            )}
                            <SideBarMenuItem
                                menu={{
                                    name: "Profile",
                                    icon: "LuUserCircle2",
                                    path: "/dashboard/profile",
                                }}
                            />

                            {user?.role === "admin" && (
                                <>
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Users",
                                            icon: "LuUser",
                                            path: "/dashboard/all-users",
                                        }}
                                    />
                                    <h4 className="text-gray-400 font-semibold text-xs mt-2">
                                        Settings
                                    </h4>
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Settings",
                                            icon: "LuSettings",
                                            path: "/dashboard/settings",
                                        }}
                                    />
                                </>
                            )}
                            <SideBarMenuItem
                                menu={{
                                    name: "Back to Home",
                                    icon: "LuHome",
                                    path: "/",
                                }}
                            />
                            {/* <SidebarSubMenu
                                menu={{ name: "Seetings", icon: "LuSettings" }}
                                subMenu={[
                                    { name: "Company", path: "settings" },
                                    { name: "Mail", path: "email-settings" },
                                ]}
                            ></SidebarSubMenu> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Sidebar;
