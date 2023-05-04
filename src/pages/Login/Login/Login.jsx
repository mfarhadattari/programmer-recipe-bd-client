import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const redirectFrom = location?.state?.pathname;
  console.log(redirectFrom);

  /* ------------ message state --------------- */
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------- data from context -------------- */
  const { loginUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);

  /* ------- password show handler -------------- */
  const [passwordShow, setPasswordShow] = useState(false);
  const handelPasswordShow = () => {
    setPasswordShow(!passwordShow);
    if (!passwordShow) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  /* ------------ github login handler ------------- */
  const handelGithubLogin = () => {
    // reset message
    setErrorMessage("");
    setSuccessMessage("");
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("Login Successful");
        if (redirectFrom) {
          navigate(redirectFrom, { replace: true });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(error.message);
      });
  };

  /*-------------- google login handler -------------  */
  const handelGoogleLogin = () => {
    // reset message
    setErrorMessage("");
    setSuccessMessage("");
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("Login Successful");
        if (redirectFrom) {
          navigate(redirectFrom, { replace: true });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(error.message);
      });
  };

  /* -------------- email password login form handler------ */
  const handelSubmitLogin = (event) => {
    // stop page reload
    event.preventDefault();

    // reset massage
    setErrorMessage("");
    setSuccessMessage("");

    // get form data
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email , password);

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("Login Successful");
        form.reset();
        if (redirectFrom) {
          navigate(redirectFrom, { replace: true });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="mt-10 w-[500px] mx-auto">
      {/* message section */}
      <div>
        {successMessage && (
          <p className="text-green-600 px-5 py-3 border border-green-600 text-center text-xl my-5">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 px-5 py-3 border border-red-600 text-center text-xl my-5">
            {errorMessage}
          </p>
        )}
      </div>

      {/* Login form section */}
      <div className="w-3/4 mx-auto p-5 border rounded-lg">
        <h3 className="text-center text-xl font-semibold">Login Please</h3>
        <form className="my-5" onSubmit={handelSubmitLogin}>
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

      {/* social login section */}
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
