import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form action="" className=" bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang?.[langKey].gptPlaceholder}
          className="p-2 m-2 bg-white rounded-lg text-black col-span-9"
        />
        <button className="py-2 px-4  bg-red-600 text-white rounded-lg col-span-3 m-4">
          {lang?.[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
