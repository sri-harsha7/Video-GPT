import Header from "./Header";
import { AVATAR, Background_IMG } from "../utils/constants";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { AVATAR },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          src={Background_IMG}
          alt="Background Img"
          className=" w-screen h-screen object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="relative top-40 mx-auto w-full py-15 px-10 bg-black text-white bg-opacity-70 sm:w-3/12 md:w-2/3 lg:w-1/2 xl:w-1/3"
      >
        <h1 className="text-3xl py-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 my-5 text-white border-1 border-white w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          name="Email"
          placeholder="Email / Phone number"
          className="p-2 my-5 text-white border-1 border-white w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          name="Password"
          placeholder="Password"
          className="p-2 my-5 text-white border-1 border-white w-full bg-gray-700"
        />
        {!isSignIn && (
          <p className="">
            {" "}
            Password must be at least 8 characters One UpperCase letter , One
            LowerCase letter , One number and one special character
          </p>
        )}
        <p className="text-red-600">{errorMessage}</p>
        <button
          type="submit"
          className="p-2 my-5 w-full bg-red-600"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm}>
          {!isSignIn
            ? "Already Registered ? Sign In"
            : "New to Netflix ? Sign Up"}
        </p>
      </form>
    </div>
  );
};
export default Login;
