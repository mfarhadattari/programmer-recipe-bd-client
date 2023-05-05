import { Rating } from "@smastrom/react-rating";
import React from "react";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const {
    img_url,
    chefName,
    chef_avatar,
    chef_id,
    description,
    foodName,
    rating,
  } = useLoaderData();

  return (
    <section className="container mx-auto my-20">
      <div className="grid md:grid-cols-2 gap-10">
        <figure className="h-[400px]">
          <LazyLoad offset={100} threshold={0.95}>
            <img
              src={img_url}
              alt={foodName}
              className="h-full w-full rounded-xl"
            />
          </LazyLoad>
        </figure>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-pacifico font-bold">{foodName}</h2>
            <div className="tooltip" data-tip={chefName}>
              <div className="avatar">
                <Link
                  className="w-16 mask mask-circle"
                  to={`/chef/${chef_id}}`}
                >
                  <LazyLoad offset={100} threshold={0.95}>
                    <img src={chef_avatar} />
                  </LazyLoad>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-justify text-xl text-gray-600 mt-5">
            {description}
          </p>
          <div className="flex justify-between items-center mt-10">
            <div className="tooltip" data-tip={rating}>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <Link className="btn btn-primary" to={`/chef/${chef_id}}`}>
              More Food of {chefName}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
