import {
  CategoryDistributionChart,
  Header,
  SalesOverviewChart,
  StatCard,
  UserActivity,
} from "../components";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, TrendingUp, CreditCard } from "lucide-react";

function Sales() {
  const StatCardInfo = [
    {
      name: "Total Revenue",
      icon: DollarSign,
      value: "$12,345,678",
      color: "#6366f1",
    },
    {
      name: "Avg. Order Value",
      icon: ShoppingCart,
      value: "$78.98",
      color: "#10b981",
    },
    {
      name: "Conversion Rate",
      icon: TrendingUp,
      value: "9.8%",
      color: "#f59e0b",
    },
    {
      name: "Sales Growth",
      icon: CreditCard,
      value: "34.6%",
      color: "#10b981",
    },
  ];
  const userActivityData = [
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
    { month: "May", sales: 6500 },
    { month: "Jun", sales: 7000 },
  ];
  const categoryData = [
    { name: "Electronics", value: 4500 },
    { name: "Clothing", value: 3200 },
    { name: "Home & Garden", value: 2800 },
    { name: "Books", value: 2100 },
    { name: "Sports & Outdoors", value: 1900 },
  ];
  const keys = Object.keys(userActivityData[0]).filter((key) => key !== "name");
  const COLORS = [
    "#10b981",
    "#10b981",
    "#10b981",
    "#10b981",
    "#10b981",
    "#10b981",
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Sales Dashboard"} />

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
        <SalesOverviewChart />

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <CategoryDistributionChart
            title={"Sales by Category"}
            data={categoryData}
          />
          <UserActivity
            data={userActivityData}
            name={"month"}
            color={COLORS}
            dataKey={keys}
          />
        </div>
      </main>
    </div>
  );
}

export default Sales;
