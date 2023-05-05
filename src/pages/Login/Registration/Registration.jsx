import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Registration = () => {
  //* ---------- data from use context---------------- */
  const { createUser, logOutUser, addUserName, addUserAvatar } =
    useContext(AuthContext);

  /* ------- reference of input field------------- */
  const passwordRef = useRef();

  /* ------------ message state --------------- */
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /*--------- handel password show------------ */
  const [passwordShow, setPasswordShow] = useState(false);
  const handelPasswordShow = () => {
    setPasswordShow(!passwordShow);
    if (!passwordShow) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  /* ------- create user using email and password handler------------- */
  const handelSubmitRegister = (event) => {
    // stop reload
    event.preventDefault();

    // reset massage
    setErrorMessage("");
    setSuccessMessage("");

    // get data from form
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    // create user
    createUser(email, password)
      .then((result) => {
        if (name) {
          addUserName(name);
        }
        if (photoUrl) {
          addUserAvatar(photoUrl);
        }
        setSuccessMessage("Register Successful");
        form.reset();
        logOutUser();
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="md:w-[500px] mx-auto mt-10">
      {/* message section */}
      <div>
        {successMessage && (
          <p className="text-green-600 px-5 py-3 border border-green-600 text-center text-xl my-5">
            {successMessage} <Link to="/login" className="underline text-2xl">Go to Login</Link>
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 px-5 py-3 border border-red-600 text-center text-xl my-5">
            {errorMessage}
          </p>
        )}
      </div>
      <div className="w-3/4 mx-auto p-5 border rounded-lg">
        <h3 className="text-center text-xl font-semibold">Register Please</h3>
        <form className="my-5" onSubmit={handelSubmitRegister}>
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
          <div className="font-semibold text-lg mb-5">
            <input
              className="border border-blue-700 outline-blue-700 rounded-md w-full py-2 px-5"
              type="url"
              name="photoUrl"
              placeholder="Photo URL"
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
