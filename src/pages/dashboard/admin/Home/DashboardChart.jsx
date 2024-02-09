import Chart from "react-apexcharts";

const DashboardChart = () => {
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            date: [2024-2-2, 2024-2-3, 2024-2-4, 2024-2-5, 2024-2-6, 2024-2-7, 2024-2-8, 2024-2-9]
        },
    };
    const series = [
        {
            name: "Events",
            data: [25, 10, 36, 20, 49, 80, 70, 30]
        },
        {
            name: "Bookings",
            data: [10, 70, 30, 15, 21, 54, 90, 30]
        },
        {
            name: "products",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "users",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
    return (
        <Chart
        options={options}
        series={series}
        type="bar"
        height="350"
        // width="500"
      />
    );
};

export default DashboardChart;