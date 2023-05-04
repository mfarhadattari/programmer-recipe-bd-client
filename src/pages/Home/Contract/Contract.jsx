import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const Contract = () => {
  return (
    <section className="container mx-auto">
      <div className="p-20 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-4 font-pacifico">
            Contract Information
          </h1>
          <p className="text-gray-600 mb-6 text-xl pl-3 border-l-2 border-lime-600">
            Here's our contact information if you have any
            <br />
            questions or concerns about the contract.
          </p>
          <ul className="mb-6">
            <li className="flex gap-2 items-center">
              <FaEnvelope></FaEnvelope> info@programmer-recipe.bd
            </li>
            <li className="flex gap-2 items-center">
              <FaPhone></FaPhone> +8801536589741
            </li>
            <li className="flex gap-2 items-center">
              <FaLocationArrow></FaLocationArrow> Chattogram, Chattogram,
              Bangladesh
            </li>
          </ul>
        </div>
        <div>
          <div className="container mx-auto px-4">
            <div>
              <h2 className="text-2xl font-bold mb-4 font-pacifico">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-600 mb-6 text-xl">
                Stay update with our latest recipe
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-400 rounded px-2 py-1 w-full md:w-3/4"
                  placeholder="Enter your email address"
                />
              </div>
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
