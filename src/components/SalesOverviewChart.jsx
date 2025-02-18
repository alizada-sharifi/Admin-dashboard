import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const weeklySalesData = [
  { week: "Sun", sales: 10 },
  { week: "Mon", sales: 20 },
  { week: "Tue", sales: 30 },
  { week: "Wed", sales: 25 },
  { week: "Thu", sales: 32 },
  { week: "Fri", sales: 40 },
  { week: "Sat", sales: 30 },
];

const monthlySalesData = [
  { month: "Jan", sales: 1000 },
  { month: "Feb", sales: 1030 },
  { month: "Mar", sales: 1230 },
  { month: "Apr", sales: 1460 },
  { month: "May", sales: 2000 },
  { month: "Jun", sales: 2100 },
  { month: "Jul", sales: 2110 },
  { month: "Aug", sales: 2002 },
  { month: "Sep", sales: 4000 },
  { month: "Oct", sales: 1900 },
  { month: "Nov", sales: 3500 },
  { month: "Dec", sales: 2000 },
];

const quarterlySalesData = [
  { season: "Spring", sales: 10000 },
  { season: "Summer", sales: 14000 },
  { season: "Fall", sales: 23000 },
  { season: "Winter", sales: 14000 },
];

const yearlySalesData = [
  { year: "2020", sales: 100000 },
  { year: "2021", sales: 200000 },
  { year: "2022", sales: 300000 },
  { year: "2023", sales: 105000 },
  { year: "2024", sales: 230000 },
];

function SalesOverviewChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  const getChartData = () => {
    switch (selectedTimeRange) {
      case "This Week":
        return { data: weeklySalesData, xKey: "week" };
      case "This Month":
        return { data: monthlySalesData, xKey: "month" };
      case "This Quarter":
        return { data: quarterlySalesData, xKey: "season" };
      case "This Year":
        return { data: yearlySalesData, xKey: "year" };
      default:
        return { data: monthlySalesData, xKey: "month" };
    }
  };

  const { data, xKey } = getChartData();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>

        <select
          className="bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Quarter">This Quarter</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={xKey} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
