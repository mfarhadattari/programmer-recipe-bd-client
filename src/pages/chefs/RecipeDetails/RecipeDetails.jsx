import { Rating } from "@smastrom/react-rating";
import { key } from "localforage";
import React, { useRef, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData } from "react-router-dom";
import { FaHeart, FaList, FaTasks } from "react-icons/fa";
import { toast } from "react-hot-toast";

const RecipeDetails = () => {
  const favoriteBtnRef = useRef();
  const [disabled, setDisabled] = useState(false);
  const {
    img_url,
    chefName,
    chef_avatar,
    chef_id,
    description,
    foodName,
    rating,
    ingredients,
    cooking_method,
  } = useLoaderData();

  const handelAddFavorite = () => {
    toast("Recipe added in favorite");
    setDisabled(true)
  };

  return (
    <section className="container mx-auto my-20">
      <div className="grid md:grid-cols-2 gap-10">
        <figure>
          <LazyLoad offset={100} threshold={0.95}>
            <img
              src={img_url}
              alt={foodName}
              className=" w-full rounded-xl h-[400px]"
            />
          </LazyLoad>
        </figure>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-pacifico font-bold">{foodName}</h2>
            <div className="tooltip" data-tip={chefName}>
              <div className="avatar">
                <Link className="w-16 mask mask-circle" to={`/chef/${chef_id}`}>
                  <LazyLoad offset={100} threshold={0.95}>
                    <img src={chef_avatar} />
                  </LazyLoad>
                </Link>
              </div>
            </div>
          </div>

          {/* ------- description ----------*/}
          <p className="text-justify text-xl text-gray-600 mt-5">
            {description}
          </p>

          <div className="flex justify-between items-center mt-10">
            <div className="tooltip" data-tip={rating}>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <button
              onClick={handelAddFavorite}
              ref={favoriteBtnRef}
              disabled={disabled}
            >
              <FaHeart className={`text-2xl ${disabled ? 'text-red-400' : 'text-red-600'}`}></FaHeart>
            </button>
          </div>
        </div>
      </div>

      {/* ----------- ingredients and cooking method */}
      <div className="grid md:grid-cols-2 mt-10">
        <div className="mt-5">
          <h4 className="text-2xl font-pacifico flex gap-5 items-center">
            <FaList></FaList> Ingredients:
          </h4>
          <ul className="list-disc ml-5 grid grid-cols-2 ">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-xl text-gray-700 my-2">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h5 className="text-2xl font-pacifico flex gap-5 items-center">
            <FaTasks></FaTasks> Cooking Methods:
          </h5>
          <ul className="list-disc ml-5">
            {cooking_method.map((method, index) => (
              <li key={index} className="text-xl text-gray-700 my-2">
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
