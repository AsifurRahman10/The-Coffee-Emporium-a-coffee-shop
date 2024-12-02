import { Link } from "react-router-dom";
import logo from "../assets/images/more/logo1.png";
export const Navbar = () => {
  return (
    <div className="bg-nav-bg py-3 bg-cover bg-no-repeat bg-center rancho">
      <div className=" flex justify-center items-center gap-2">
        <div>
          <img className="w-[75px]" src={logo} alt="" />
        </div>
        <div>
          <h1 className="text-6xl text-white">The Coffee Emporium</h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link to={"/login"}>
          <button className="btn bg-[#E3B577] border-2 border-transparent rounded-none rancho text-[#242222] text-2xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white  px-8">
            Login
          </button>
        </Link>
        <Link to={"/user"}>
          <button className="btn bg-[#E3B577] border-2 border-transparent rounded-none rancho text-[#242222] text-2xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white  px-8">
            All user
          </button>
        </Link>
      </div>
    </div>
  );
};
