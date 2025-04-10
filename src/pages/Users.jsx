import { motion } from "framer-motion";
import {
  User2Icon,
  UserCheck,
  UserPlus,
  UserX,
  Edit,
  Trash2,
} from "lucide-react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import { Table } from "../components/tables";
import {
  SalesChart,
  UserActivity,
  CategoryDistributionChart,
} from "../components/charts";

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
  const titles = ["name", "email", "role", "status", "Actions"];
  const users = [
    {
      id: 1,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
    },

    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Customer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 5,
      name: "Akbar Ahmadi",
      email: "akbar@example.com",
      role: "Moderator",
      status: "Active",
    },
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

        <Table
          title="Users List"
          placeholder="Search Users..."
          data={users}
          param1="name"
          param2="role"
        >
          {(filteredData) => (
            <>
              <thead>
                <tr>
                  {titles.map((title, index) => (
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      key={titles[index]}
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-700">
                {filteredData.map((user) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 size-10 ">
                          <div className="size-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold ">
                            {user.name.charAt(0)}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-100">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={` px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-blue-100 
                      ${
                        user.status === "Active" ? "bg-green-800" : "bg-red-800"
                      }
                    } `}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </>
          )}
        </Table>

        {/* ============= charts section ================= */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          <SalesChart
            data={usersData}
            title={"User Growth"}
            param2={"users"}
            param={"month"}
          />
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
