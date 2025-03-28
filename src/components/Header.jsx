import { AVATAR, LOGO, SUPPORTED_LANG } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
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
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
    <div
      className=" fixed w-full absloute px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col 
     md:flex-row justify-between "
    >
      <div className="w-44 mx-auto md:mx-0 ">
        <img src={LOGO} alt="" className="w-50 h-full object-contain" />
      </div>
      {user && (
        <div className="flex items-center mr-10">
          {showGptSearch && (
            <select
              name="language"
              id=""
              className="bg-white text-black "
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-white text-black rounded-sm mx-7"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img src={AVATAR} alt="user Icon" className="pr-4 w-15" />
          <button
            onClick={handleSignOut}
            className="text-white px-7 text-wrap md:text-white md:border-2 md:p-1 md:w-25 md:h-10 md:rounded md: bg-red-700 "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
