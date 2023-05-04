import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Loader from "../../../components/Loader/Loader";

const Chef = () => {
  const chef = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation.state, chef);

  return;
};

export default Chef;
