import { AVATAR, LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //This will be Called When Component Will Unmount
    return () => unSubscribe();
  }, []);

  return (
    <div className=" w-full absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between sm:justify-between md:justify-between lg:justify-between xl:justify-between ">
      <div className="w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10  ">
        <img src={LOGO} alt="" className="w-50 h-full object-contain" />
      </div>
      {user && (
        <div className="flex items-center mr-10">
          <img src={AVATAR} alt="user Icon" className="pr-4 w-15" />
          <button
            onClick={handleSignOut}
            className="text-white border-2 p-1 w-25 h-10 rounded bg-red-700 "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
