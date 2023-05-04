import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Blog from "../pages/Home/Blog/Blog";
import Chef from "../pages/chefs/Chef/Chef";
import Profile from "../pages/Login/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef/:id",
        element: <Chef></Chef>,
        loader: ({ params }) =>
          fetch(
            `https://programmar-recipe-bd-server.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
