import { Rating } from "@smastrom/react-rating";
import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <LazyLoad offset={100} threshold={0.95}>
          <img
            src={recipe.img_url}
            alt={recipe.foodName}
            className="w-full h-[300px]"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe.foodName}</h2>
        <p>{recipe.description}</p>
        <div className="card-actions justify-between items-center mt-5">
          <div className="tooltip" data-tip={recipe.rating}>
            <Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly />
          </div>
          <Link className="btn btn-primary" to={`/recipe/${recipe.food_id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
