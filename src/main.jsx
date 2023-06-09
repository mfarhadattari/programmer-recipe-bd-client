import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* -------- react rating css ---------*/
import "@smastrom/react-rating/style.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
