import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Loader from "../../../components/Loader/Loader";
import { FaThumbsUp } from "react-icons/fa";
import RecipeCard from "../RecipeCard/RecipeCard";
import LazyLoad from "react-lazy-load";

const Chef = () => {
  const chef = useLoaderData();
  const { chefInfo, recipes } = chef;
  return (
    <main className="container mx-auto mt-10">
      <section className="grid md:grid-cols-3 gap-5 justify-center items-center p-5">
        <div>
          <LazyLoad offset={100} threshold={0.95}>
            <img
              src={chefInfo?.chef_avatar}
              alt={chefInfo?.chefName}
              className="md:h-[300px] w-full md:w-[300px] rounded-lg "
            />
          </LazyLoad>
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl font-medium my-3">{chefInfo.chefName}</h1>
          <p className="my-2 text-xl text-justify">{chefInfo.about}</p>
          <p className="my-2 font-bold text-lg">
            Experience: {chefInfo.experience}
          </p>
          <p className="flex gap-10 text-lg font-medium">
            <span className="flex gap-2 items-center">
              <FaThumbsUp></FaThumbsUp>
              {chefInfo.likes}
            </span>
            <span>Recipe: {chefInfo.num_of_recipes}</span>
          </p>
        </div>
      </section>
      <section className="mt-40 p-5">
        {recipes.length > 0 && (
          <h1 className="text-3xl text-center font-pacifico font-semibold my-10">
            Recipe of Chef
          </h1>
        )}
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mx-auto">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.food_id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Chef;
