import { AVATAR, LOGO } from "../utils/Images";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
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
        navigate("/error");
      });
  };
  return (
    <div className=" w-full absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-50  ">
        <img src={LOGO} alt="" />
      </div>
      {user && (
        <div className="flex items-center mr-10">
          <img src={user?.photoURL} alt="user Icon" className="pr-4 w-15" />
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
