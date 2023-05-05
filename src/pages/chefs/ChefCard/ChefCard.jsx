import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    chef_id,
    chefName,
    chef_avatar,
    about,
    experience,
    likes,
    num_of_recipes,
  } = chef;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
      <figure>
        <LazyLoad offset={100} threshold={0.95}>
          <img
            src={chef_avatar}
            alt={chefName}
            className="rounded-full w-[250px] h-[250px]"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>Experience: {experience}</p>
        <p>Total Recife: {num_of_recipes}</p>

        <div className="card-actions items-center">
          <p className="flex items-center gap-1">
            <FaThumbsUp></FaThumbsUp>
            {likes}
          </p>
          <button className="btn btn-primary">
            <Link to={`chef/${chef_id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
