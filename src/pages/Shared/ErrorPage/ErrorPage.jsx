import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-[500px] flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4 font-pacifico">
          <span className="text-8xl">404</span> Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, the page you're looking for could not be found.
        </p>
        <button className="btn btn-warning"><Link to='/'>Back to home</Link></button>
      </div>
    </div>
  );
};

export default ErrorPage;
