import { motion } from "framer-motion";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function CustomerSegmentaion() {
  const customerSegmentaion = [
    { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
    { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
    { subject: "Statisfaction", A: 86, B: 130, fullMark: 150 },
    { subject: "Spend", A: 99, B: 100, fullMark: 150 },
    { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
    { subject: "Recency", A: 65, B: 85, fullMark: 150 },
  ];
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Customer Segmentaion
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={customerSegmentaion}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9ca3af" />
            <Radar
              name="segment A"
              dataKey="A"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.6}
            />
            <Radar
              name="segment B"
              dataKey="B"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default CustomerSegmentaion;
