import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  const passwordRef = useRef();
  const [passwordShow, setPasswordShow] = useState(false);

  const handelPasswordShow = () => {
    setPasswordShow(!passwordShow);
    if (!passwordShow) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };
  return (
    <div className="w-[500px] mx-auto mt-10">
      <div className="w-3/4 mx-auto p-5 border rounded-lg">
        <h3 className="text-center text-xl font-semibold">Register Please</h3>
        <form className="my-5">
          <div className="font-semibold text-lg mb-5">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="font-semibold text-lg mb-5">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="font-semibold text-lg mb-5 relative">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="password"
              name="password"
              placeholder="Your Password"
              ref={passwordRef}
              required
            />
            <div
              className="absolute top-3 right-3 text-2xl"
              onClick={handelPasswordShow}
            >
              {passwordShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
          </div>
          <div className="font-semibold text-lg mb-5">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
            />
          </div>
          <div className="mb-5">
            <p>
              Already an account? Please{" "}
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="font-semibold text-lg mb-5">
            <button className="bg-blue-600 text-white rounded-md w-full py-2 px-5">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
