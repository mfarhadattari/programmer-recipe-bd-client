import React from "react";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const chef = useLoaderData();
  console.log(chef)
  return <div></div>;
};

export default Chef;
