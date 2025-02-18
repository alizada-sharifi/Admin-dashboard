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
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesChart data={usersData} title={"User Growth"} param={"users"} />
          {/* <UserActivity /> */}
          <CategoryDistributionChart
            title={"User Demographics"}
            data={categoryData}
          />
        </div>
      </main>
    </div>
  );
}

export default Users;
