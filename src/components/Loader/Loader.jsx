import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="text-center my-10">
      <PropagateLoader color="#36d7b7" size={20} />
    </div>
  );
};

export default Loader;
