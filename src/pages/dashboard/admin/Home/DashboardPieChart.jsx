import Chart from "react-apexcharts";

const DashboardPieChart = () => {
    const options = {}
    const series = [44, 55, 41, 17, 15]
    const labels = ["Team A", "Team B", "Team C", "Team D", "Team E"]
    return (
        <Chart
            options={options}
            series={series}
            labels={labels}
            type="donut"
            // height="350"
            // width="380"
        />
    );
};

export default DashboardPieChart;
