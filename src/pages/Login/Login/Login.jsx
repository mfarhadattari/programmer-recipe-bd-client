import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
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
    <div className="mt-10 w-[500px] mx-auto">
      <div className="w-3/4 mx-auto p-5 border rounded-lg">
        <h3 className="text-center text-xl font-semibold">Login Please</h3>
        <form className="my-5">
          <div className="font-semibold text-lg mb-5">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="font-semibold text-lg mb-5 relative">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="password"
              name="password"
              placeholder="Your Password"
              ref={passwordRef}
            />
            <div
              className="absolute top-3 right-3 text-2xl"
              onClick={handelPasswordShow}
            >
              {passwordShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
          </div>
          <div className="mb-5">
            <p>
              Don't have any account? Please{" "}
              <Link className="underline" to="/register">
                Register
              </Link>
            </p>
          </div>
          <div className="font-semibold text-lg mb-5">
            <button className="bg-blue-600 text-white rounded-md w-full py-2 px-5">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
