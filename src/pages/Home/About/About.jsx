import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="container mx-auto px-4 text-xl">
        <h1 className="text-3xl font-bold mb-4 text-center font-pacifico">About Us</h1>
        <p className="text-gray-600 mb-6">
          Welcome to Programmer, where food and family come together. We has
          been serving delicious meals to families and friends for over 20
          years, and we're proud to be a part of the local community.
        </p>
        <p className="text-gray-600 mb-6">
          Our chefs are passionate about creating meals that are both delicious
          and nutritious. We use only the freshest ingredients, sourced from
          local farmers and suppliers whenever possible. Our menu features a
          wide range of dishes, from classic comfort food to modern twists on
          traditional favorites.
        </p>
        <p className="text-gray-600 mb-6">
          We're also proud to give back to the community that has supported us
          over the years. That's why we partner with local charities and
          organizations to help make a difference in the lives of those around
          us.
        </p>
      </div>
    </div>
  );
};

export default About;
