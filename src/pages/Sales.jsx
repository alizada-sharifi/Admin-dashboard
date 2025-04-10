import  Header  from "../components/Header";
import  StatCard  from "../components/StatCard";
import {
  CategoryDistributionChart,
  SalesOverviewChart,
  UserActivity,
} from "../components/charts";
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
        <SalesOverviewChart
          weeklySalesData={weeklySalesData}
          monthlySalesData={monthlySalesData}
          quarterlySalesData={quarterlySalesData}
          yearlySalesData={yearlySalesData}
          params={["sales"]}
        />

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
