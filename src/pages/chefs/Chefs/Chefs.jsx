import React, { useContext, useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import { useNavigation } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { AuthContext } from "../../../provider/AuthProvider";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch("https://programmar-recipe-bd-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="mt-20 text-center">
        {loading ? <Loader></Loader> : ""}
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {chefs.map((chef) => (
          <ChefCard key={chef.chef_id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
