import PropTypes from "prop-types";
import logo from "../../assets/logo/logo-dark.png";
import Loading from "../../components/loading/Loading";
import SideBarMenuItem from "../../components/sidebar/SideBarMenuItem";
import SidebarSubMenu from "../../components/sidebar/SidebarSubMenu";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
                    sidebarOpen ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col bg-[#0c1427] min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b border-gray-900 py-[18px]">
                    <img src={logo} alt="" className="w-28" />
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
                                            name: "Profile",
                                            icon: "LuCommand",
                                            path: "/dashboard/profile",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Wishlist",
                                            icon: "LuCommand",
                                            path: "/dashboard/wishList",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Ticket Bookings",
                                            icon: "LuCommand",
                                            path: "/dashboard/userBooking",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Custom Events",
                                            icon: "LuCommand",
                                            path: "/dashboard/customEventsBooking",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Cart",
                                            icon: "LuCommand",
                                            path: "/dashboard/cart",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Back to home",
                                            icon: "LuCommand",
                                            path: "/",
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
                                    <SidebarSubMenu
                                        menu={{ name: "Events", icon: "LuCalendarPlus" }}
                                        subMenu={[
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
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Organizer Request",
                                            icon: "LuCommand",
                                            path: "/dashboard/organizer-request",
                                        }}
                                    />
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
