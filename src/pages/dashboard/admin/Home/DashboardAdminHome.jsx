import {
    HiOutlineChartPie,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineUser,
} from "react-icons/hi";
import DashboardChart from "./DashboardChart";
import DashboardPieChart from "./DashboardPieChart";

const DashboardAdminHome = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-indigo-100 py-3.5 px-3">
                        <HiOutlineEye className="text-indigo-500" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            6
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Events
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-green-100 py-3.5 px-3">
                        <HiOutlineClock className="text-green-600" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            0
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Bookings
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-rose-100 py-3.5 px-3">
                        <HiOutlineChartPie className="text-primary" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            10
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Products
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-amber-100 py-3.5 px-3">
                        <HiOutlineUser className="text-amber-600" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            14
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Users
                        </span>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="">
                    <h3 className="text-2xl font-bold">Events Statistics</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    
                    <div className="md:w-3/4 mx-auto">
                        <DashboardChart />
                    </div>
                    <div className="md:w-1/3 self-center mx-auto">
                        <DashboardPieChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAdminHome;
