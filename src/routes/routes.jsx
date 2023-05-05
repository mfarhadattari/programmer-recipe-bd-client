import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Blog from "../pages/Home/Blog/Blog";
import Chef from "../pages/chefs/Chef/Chef";
import Profile from "../pages/Login/Profile/Profile";
import PrivateRoute from "./privateRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import RecipeDetails from "../pages/chefs/RecipeDetails/RecipeDetails";

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
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <Chef></Chef>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://programmar-recipe-bd-server.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://programmar-recipe-bd-server.vercel.app/recipe/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
