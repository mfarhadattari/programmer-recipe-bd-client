import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Loader from "../../../components/Loader/Loader";

const Chef = () => {
  const chef = useLoaderData();
  console.log(chef);
  return (
    <div>
      
    </div>
  );
};

export default Chef;
