import { motion } from "framer-motion";
import { Zap, Users, ShoppingBag, ChartNoAxesColumn } from "lucide-react";

import Header from "../components/Header";
import StatCard from "../components/StatCard";
import {
  SalesChart,
  CategoryDistributionChart,
  SalesChannelChart,
} from "../components/overview";
function Overview() {
  const StatCardInfo = [
    {
      name: "Total Sales",
      icon: Zap,
      value: "$12,345",
      color: "#6366f1",
    },
    {
      name: "New Users",
      icon: Users,
      value: "1,234",
      color: "#885cf6",
    },
    {
      name: "Total Products",
      icon: ShoppingBag,
      value: "897",
      color: "#ec4899",
    },
    {
      name: "Conversion Rate",
      icon: ChartNoAxesColumn,
      value: "15.6%",
      color: "#10b981",
    },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="container py-6">
        {/* ==========statCards sectionn ============== */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {StatCardInfo.map((item) => (
            <StatCard {...item} key={item.name} />
          ))}
        </motion.div>

        {/* ================= charts section ================ */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesChart />
          <CategoryDistributionChart />
          <SalesChannelChart /> 
        </div>
      </main>
    </div>
  );
}

export default Overview;
