import { motion } from "framer-motion";
import { User2Icon, UserCheck, UserPlus, UserX } from "lucide-react";
import {
  StatCard,
  Header,
  UsersTable,
  SalesChart,
  UserActivity,
  CategoryDistributionChart,
} from "../components";

function Users() {
  const StatCardInfo = [
    {
      name: "Total Users",
      icon: User2Icon,
      value: "134,345",
      color: "#6366f1",
    },
    {
      name: "New Users",
      icon: UserPlus,
      value: "987",
      color: "#10b981",
    },
    {
      name: "Active Users",
      icon: UserCheck,
      value: "98,700",
      color: "#f59e0b",
    },
    {
      name: "Churn Rate",
      icon: UserX,
      value: "2.56%",
      color: "#ef4444",
    },
  ];
  const usersData = [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 789 },
    { month: "Mar", users: 1023 },
    { month: "Apr", users: 1890 },
    { month: "May", users: 2000 },
    { month: "Jun", users: 3200 },
  ];
  const categoryData = [
    { name: "18-24", value: 20 },
    { name: "25-34", value: 30 },
    { name: "35-44", value: 24 },
    { name: "45-54", value: 14 },
    { name: "55+", value: 10 },
  ];
  const userActivityData = [
    {
      name: "Mon",
      "0-4": 20,
      "4-8": 40,
      "8-12": 60,
      "12-16": 80,
      "16-20": 100,
      "20-24": 30,
    },
    {
      name: "Tue",
      "0-4": 30,
      "4-8": 50,
      "8-12": 70,
      "12-16": 90,
      "16-20": 110,
      "20-24": 40,
    },
    {
      name: "Wed",
      "0-4": 40,
      "4-8": 60,
      "8-12": 80,
      "12-16": 100,
      "16-20": 120,
      "20-24": 50,
    },
    {
      name: "Thu",
      "0-4": 50,
      "4-8": 70,
      "8-12": 90,
      "12-16": 110,
      "16-20": 130,
      "20-24": 60,
    },
    {
      name: "Fri",
      "0-4": 60,
      "4-8": 80,
      "8-12": 100,
      "12-16": 120,
      "16-20": 140,
      "20-24": 70,
    },
    {
      name: "Sat",
      "0-4": 70,
      "4-8": 90,
      "8-12": 110,
      "12-16": 130,
      "16-20": 150,
      "20-24": 80,
    },
    {
      name: "Sun",
      "0-4": 80,
      "4-8": 100,
      "8-12": 120,
      "12-16": 140,
      "16-20": 160,
      "20-24": 90,
    },
  ];
  const COLORS = [
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
    "#10B981",
    "#F59E0B",
    "#3B82F6",
  ];
  const keys = Object.keys(userActivityData[0]).filter((key) => key !== "name");

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

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

        <UsersTable />

        {/* ============= charts section ================= */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          <SalesChart data={usersData} title={"User Growth"} param2={"users"} param={"month"} />
          <UserActivity
            data={userActivityData}
            name={"name"}
            color={COLORS}
            dataKey={keys}
            stackId={"a"}
          />
        </div>
        <CategoryDistributionChart
          title={"User Demographics"}
          data={categoryData}
        />
      </main>
    </div>
  );
}

export default Users;
