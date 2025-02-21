import { createBrowserRouter } from "react-router";
import mainRouter from "./MainRouter";
import subRouter from "./SubRouter";

const router = createBrowserRouter([...mainRouter, ...subRouter]);

export default router;
