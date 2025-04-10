import MainLayout from "../layouts/MainLayout";
import {
  Analytics,
  NotFound,
  Order,
  Overview,
  Products,
  Sales,
  Setting,
  Users,
} from "../pages";

const MainRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default MainRouter;
