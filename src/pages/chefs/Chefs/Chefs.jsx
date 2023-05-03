import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://programmar-recipe-bd-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(chefs);
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {chefs.map((chef) => (
        <ChefCard key={chef.chef_id} chef={chef}></ChefCard>
      ))}
    </div>
  );
};

export default Chefs;
