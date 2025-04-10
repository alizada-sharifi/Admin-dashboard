import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SalesOverviewChart({
  weeklySalesData,
  monthlySalesData,
  quarterlySalesData,
  yearlySalesData,
  params, // Accept an array of keys
}) {
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
            <Legend />
            {params.map((param, index) => (
              <Area
                key={index}
                type="monotone"
                dataKey={param}
                stroke={index % 2 === 0 ? "#8b5cf6" : "#34d399"} // Alternate colors
                fill={index % 2 === 0 ? "#8b5cf6" : "#34d399"}
                fillOpacity={0.3}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
