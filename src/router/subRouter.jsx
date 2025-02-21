import { ChangePassword, DeleteProfile, EditProfile } from "../pages/Sub";
import SubLayout from "../layouts/SubLayout";

const subRoutes = [
  { path: "/editProfile", element: <EditProfile /> },
  { path: "/deleteAccount", element: <DeleteProfile /> },
  { path: "/changePassword", element: <ChangePassword /> },
];

const subRouter = subRoutes.map((route) => ({
  ...route,
  element: <SubLayout>{route.element}</SubLayout>,
}));

export default subRouter;
