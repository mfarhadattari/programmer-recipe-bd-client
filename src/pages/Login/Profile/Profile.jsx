import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaEnvelope, FaIdBadge, FaUser, FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mt-20 mx-auto p-5">
      <h1 className="text-center text-4xl font-pacifico">User Profile</h1>
      <div className="w-full md:w-1/2 mx-auto mt-20 md:flex justify-around items-center">
        <div>
          {user?.photoURL ? (
            <div className="avatar">
              <div className="w-40 rounded-xl">
                <img src={user.photoURL} />
              </div>
            </div>
          ) : (
            <FaUser></FaUser>
          )}
        </div>
        <div>
          {user?.uid && <h1 className="text-2xl font-semibold my-2 flex items-center gap-2"><FaIdBadge></FaIdBadge> {user?.uid}</h1>}
          {user?.displayName && <h1 className="text-2xl font-semibold flex gap-2 items-center my-2"><FaUserCircle></FaUserCircle> {user?.displayName}</h1>}
          {user?.email && <h1 className="text-2xl font-semibold flex gap-2 items-center my-2"><FaEnvelope></FaEnvelope>{user?.email}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
