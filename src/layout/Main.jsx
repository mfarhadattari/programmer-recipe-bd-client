import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Loader from "../components/Loader/Loader";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="font-natos min-h-screen flex flex-col justify-between">
      <div>
        <Header></Header>
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
