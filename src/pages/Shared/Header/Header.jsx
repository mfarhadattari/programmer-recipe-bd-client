import React from "react";
import NavigationLink from "../../../components/NavigationLink/NavigationLink";

const Header = () => {
  return (
    <nav className="px-20 font-semibold flex justify-between items-center bg-pink-600 text-white py-10">
      <div className="text-2xl">
          Programmer Recife BD
      </div>
      <div className="flex gap-5 text-xl">
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/blog">Blog</NavigationLink>
        <button>Profile</button>
        <NavigationLink to="/login">Login</NavigationLink>
      </div>
    </nav>
  );
};

export default Header;
