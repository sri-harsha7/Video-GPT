import { LOGO } from "../utils/Images";
const Header = () => {
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10">
      <div className="w-50  ">
        <img src={LOGO} alt="" />
      </div>
    </div>
  );
};
export default Header;
