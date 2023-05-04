import React, { useContext } from "react";
import NavigationLink from "../../../components/NavigationLink/NavigationLink";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("Log Out Successful");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <nav className="px-20 font-semibold flex justify-between items-center bg-pink-600 text-white py-10 sticky top-0 z-50">
      <div className="text-2xl font-pacifico">Programmer Recife BD</div>
      <div className="flex items-center gap-5 text-xl">
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/blog">Blog</NavigationLink>

        {user ? (
          <div className="flex items-center gap-5" title={user?.displayName}>
            <Link to="/profile">
              {user?.photoURL ? (
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
            </Link>
            <button onClick={handelLogOut}>Log Out</button>
          </div>
        ) : (
          <NavigationLink to="/login">Login</NavigationLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
