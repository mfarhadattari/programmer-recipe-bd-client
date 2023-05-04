import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Loader from "../../../components/Loader/Loader";
import { FaThumbsUp } from "react-icons/fa";

const Chef = () => {
  const chef = useLoaderData();
  const { chefInfo, recipe } = chef;
  console.log(chefInfo);
  return (
    <section className="container mx-auto mt-10">
      <div className="grid md:grid-cols-3 justify-center items-center">
        <div>
          <img
            src={chefInfo?.chef_avatar}
            alt={chefInfo?.chefName}
            className="h-[300px] w-[300px] rounded-lg "
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl font-medium">{chefInfo.chefName}</h1>
          <p className="my-2 text-xl text-justify">{chefInfo.about}</p>
          <p className="my-2 font-bold text-lg">Experience: {chefInfo.experience}</p>
          <p className="flex gap-10 text-lg font-medium">
            <span className="flex gap-2 items-center">
              <FaThumbsUp></FaThumbsUp>
              {chefInfo.likes}
            </span>
            <span>Recipe: {chefInfo.num_of_recipes}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chef;
