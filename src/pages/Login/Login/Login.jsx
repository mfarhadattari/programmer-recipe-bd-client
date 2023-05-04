import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const passwordRef = useRef();
  const [passwordShow, setPasswordShow] = useState(false);

  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  const handelPasswordShow = () => {
    setPasswordShow(!passwordShow);
    if (!passwordShow) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const handelGithubLogin = () => {
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handelGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
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
      <h3 className="text-center font-medium font-pacifico mt-5">
        Social Login
      </h3>
      <div className="w-3/4 mx-auto p-5 border rounded-lg mt-5 ">
        <div className="font-semibold text-lg mt-5">
          <button
            className="bg-slate-600 text-white rounded-md w-full py-2 px-5 flex gap-5 justify-center items-center"
            onClick={handelGoogleLogin}
          >
            <FaGoogle></FaGoogle> Sign In with Google
          </button>
        </div>
        <div className="font-semibold text-lg mt-5">
          <button
            className="bg-cyan-600 text-white rounded-md w-full py-2 px-5 flex gap-5 justify-center items-center"
            onClick={handelGithubLogin}
          >
            <FaGithub></FaGithub>
            Sign In with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
