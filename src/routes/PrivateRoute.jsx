import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location} replace></Navigate>;
  }
};

export default PrivateRoute;