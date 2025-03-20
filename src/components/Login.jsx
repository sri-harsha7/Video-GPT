import Header from "./Header";
import { AVATAR, Background_IMG } from "../utils/Images";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
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
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
          navigate("/browse");
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
          console.log(user);
          navigate("/browse");
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
        <img src={Background_IMG} alt="Background Img" className=" w-full" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="relative top-40 mx-auto w-3/12 py-15 px-10 bg-black text-white bg-opacity-70"
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
