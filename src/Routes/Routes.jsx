import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/HomeLayout/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
],
  },
]);

export default router;
