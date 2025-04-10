import { motion } from "framer-motion";
import { Zap, Users, ShoppingBag, ChartNoAxesColumn } from "lucide-react";

import StatCard from "../components/StatCard";
import {
  SalesChart,
  SalesChannelChart,
  CategoryDistributionChart,
} from "../components/charts";
import Header from "../components/Header";
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
  const salesDate = [
    { month: "Jul", sales: 3470 },
    { month: "Aug", sales: 3100 },
    { month: "Sep", sales: 5100 },
    { month: "Oct", sales: 4800 },
    { month: "Nov", sales: 5200 },
    { month: "Dec", sales: 5470 },
    { month: "Jan", sales: 6000 },
    { month: "Feb", sales: 5890 },
    { month: "Mar", sales: 6800 },
    { month: "Apr", sales: 6300 },
    { month: "Jun", sales: 7000 },
  ];
  const categoryData = [
    { name: "Electronics", value: 4500 },
    { name: "Clothing", value: 3200 },
    { name: "Home & Garden", value: 2800 },
    { name: "Books", value: 2100 },
    { name: "Sports & Outdoors", value: 1900 },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Overview"} />

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
          <SalesChart
            data={salesDate}
            title={"Sales Overview"}
            param2={"sales"}
            param={"month"}
          />
          <CategoryDistributionChart
            title={"Category Distribution"}
            data={categoryData}
            labelLine={false}
          />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default Overview;
