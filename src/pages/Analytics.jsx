
import Header  from "../components/Header";
import  StatCard2  from "../components/StatCard2";
import AIPoweredInsights from "../components/AIPoweredInsights";
import {
  CategoryDistributionChart,
  CustomerSegmentaion,
  SalesChart,
  SalesOverviewChart,
  UserActivity,
} from "../components/charts";

import { DollarSign, Eye, ShoppingBag, Users } from "lucide-react";
import { motion } from "framer-motion";

function Analytics() {
  const StatCardInfo = [
    {
      name: "Revenue",
      value: "$12,345",
      change: "12.6",
      icon: DollarSign,
    },
    {
      name: "Users",
      icon: Users,
      value: "134,345",
      change: "8.0",
    },
    {
      name: "Orders",
      icon: ShoppingBag,
      value: "9,898",
      change: "-5.8",
    },
    {
      name: "Page Views",
      icon: Eye,
      value: "1,234,567",
      change: "23.8",
    },
  ];
  const categoryData = [
    { name: "Paid Search", value: 4500 },
    { name: "Organic Search", value: 3200 },
    { name: "Direct ", value: 2800 },
    { name: "Social Media", value: 2100 },
    { name: "Email", value: 1900 },
    { name: "Referral ", value: 4900 },
  ];
  const COLORS = [
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
    "#10B981",
    "#F59E0B",
    "#3B82F6",
  ];

  const weeklySalesData = [
    { week: "Sun", revenue: 4000, target: 4500 },
    { week: "Mon", revenue: 5000, target: 4500 },
    { week: "Tue", revenue: 5600, target: 6000 },
    { week: "Wed", revenue: 5900, target: 5010 },
    { week: "Thu", revenue: 4800, target: 4300 },
    { week: "Fri", revenue: 4100, target: 4800 },
  ];
  const monthlySalesData = [
    { month: "Jan", revenue: 40000, target: 45000 },
    { month: "Feb", revenue: 55000, target: 60000 },
    { month: "Mar", revenue: 60000, target: 70000 },
    { month: "Apr", revenue: 66000, target: 63000 },
    { month: "May", revenue: 73000, target: 75000 },
    { month: "Jun", revenue: 50000, target: 49500 },
    { month: "Jul", revenue: 39000, target: 41000 },
    { month: "Aug", revenue: 52000, target: 45000 },
    { month: "Sep", revenue: 56000, target: 80000 },
    { month: "Oct", revenue: 59000, target: 51000 },
    { month: "Nov", revenue: 100000, target: 99000 },
    { month: "Dec", revenue: 20000, target: 23000 },
  ];
  const quarterlySalesData = [
    { season: "Spring", revenue: 500000, target: 450000 },
    { season: "Summer", revenue: 390000, target: 300000 },
    { season: "Fall", revenue: 250000, target: 230000 },
    { season: "Winter", revenue: 110000, target: 100000 },
  ];
  const yearlySalesData = [
    { year: "2020", revenue: 4000000, target: 4500000 },
    { year: "2021", revenue: 4500000, target: 4500000 },
    { year: "2022", revenue: 5600000, target: 6000000 },
    { year: "2023", revenue: 5900000, target: 5000010 },
    { year: "2024", revenue: 4800000, target: 4300000 },
  ];
  const productPerformanceData = [
    { name: "Product A", sales: 4000, revenue: 2400, profit: 1400 },
    { name: "Product B", sales: 5000, revenue: 2600, profit: 2000 },
    { name: "Product C", sales: 5300, revenue: 4000, profit: 5400 },
    { name: "Product D", sales: 10000, revenue: 7600, profit: 3400 },
    { name: "Product E", sales: 13000, revenue: 9000, profit: 3500 },
  ];
  const keys = Object.keys(productPerformanceData[0]).filter(
    (key) => key !== "name"
  );
  const userRetentionData = [
    { name: "week 1", retention: 100 },
    { name: "week 2", retention: 75 },
    { name: "week 3", retention: 70 },
    { name: "week 4", retention: 65 },
    { name: "week 5", retention: 55 },
    { name: "week 6", retention: 40 },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Analytics Dashboard"} />

      <main className="container py-6">
        {/* ==========statCards sectionn ============== */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {StatCardInfo.map((item) => (
            <StatCard2 {...item} key={item.name} />
          ))}
        </motion.div>

        {/* =============charts section ============ */}
        <SalesOverviewChart
          weeklySalesData={weeklySalesData}
          monthlySalesData={monthlySalesData}
          quarterlySalesData={quarterlySalesData}
          yearlySalesData={yearlySalesData}
          params={["revenue", "target"]}
        />

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          <CategoryDistributionChart
            title={"Channel Performance"}
            data={categoryData}
          />
          <UserActivity
            data={productPerformanceData}
            name={"name"}
            color={COLORS}
            dataKey={keys}
          />
          <SalesChart
            data={userRetentionData}
            title={"User Retention"}
            param={"name"}
            param2={"retention"}
          />
          <CustomerSegmentaion />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  );
}

export default Analytics;
