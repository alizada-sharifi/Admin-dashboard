import { motion } from "framer-motion";
import {
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Bar } from "recharts";

function UserActivity() {
  const UserActivitiesData = [
    {
      name: "Mon",
      "0-4": 20,
      "4-8": 40,
      "8-12": 60,
      "12-16": 80,
      "16-20": 100,
      "20-24": 29,
    },
    {
      name: "Tue",
      "0-4": 12,
      "4-8": 23,
      "8-12": 87,
      "12-16": 102,
      "16-20": 6,
      "20-24": 19,
    },
    {
      name: "Wed",
      "0-4": 34,
      "4-8": 80,
      "8-12": 97,
      "12-16": 100,
      "16-20": 140,
      "20-24": 160,
    },
    {
      name: "Thu",
      "0-4": 5,
      "4-8": 19,
      "8-12": 100,
      "12-16": 76,
      "16-20": 30,
      "20-24": 80,
    },
    {
      name: "Fri",
      "0-4": 13,
      "4-8": 56,
      "8-12": 28,
      "12-16": 87,
      "16-20": 123,
      "20-24": 234,
    },
    {
      name: "Sat",
      "0-4": 23,
      "4-8": 46,
      "8-12": 56,
      "12-16": 245,
      "16-20": 241,
      "20-24": 103,
    },
    {
      name: "Sun",
      "0-4": 23,
      "4-8": 44,
      "8-12": 64,
      "12-16": 70,
      "16-20": 160,
      "20-24": 220,
    },
  ];
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        User Activity Heatmap
      </h2>

      <div className="h-full w-full">
        <ResponsiveContainer>
          <BarChart data={UserActivitiesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#4b5563" }}
            />
            <Legend />
            <Bar dataKey="0-4" stackId="a" fill="#6366f1" />
            <Bar dataKey="4-8" stackId="a" fill="#8b5cf6" />
            <Bar dataKey="8-12" stackId="a" fill="#ec4899" />
            <Bar dataKey="12-16" stackId="a" fill="#10b981" />
            <Bar dataKey="16-20" stackId="a" fill="#f59e0b" />
            <Bar dataKey="20-24" stackId="a" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserActivity;
