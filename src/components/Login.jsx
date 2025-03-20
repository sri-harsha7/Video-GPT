import Header from "./Header";
import { Background_IMG } from "../utils/Images";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img src={Background_IMG} alt="Background Img" className=" w-full" />
      </div>

      <form
        action=""
        className="relative top-40 mx-auto w-3/12 py-15 px-10 bg-black text-white bg-opacity-70"
      >
        <h1 className="text-3xl py-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 my-5 text-white border-1 border-white w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          name="Email"
          placeholder="Email / Phone number"
          className="p-2 my-5 text-white border-1 border-white w-full bg-gray-700"
        />
        <input
          type="Password"
          name="Password"
          placeholder="Password"
          className="p-2 my-5 text-white border-1 border-white w-full bg-gray-700"
        />
        <button type="submit" className="p-2 my-5 w-full bg-red-600">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm}>
          {!isSignIn
            ? "New to Netflix ? SignUp"
            : "Already Registered ? Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
