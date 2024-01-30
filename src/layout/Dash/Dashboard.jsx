import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState();
    return (
        <div className="flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
