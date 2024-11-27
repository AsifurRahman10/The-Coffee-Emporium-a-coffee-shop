import logo from "../assets/images/more/logo1.png";
export const Navbar = () => {
  return (
    <div className="bg-nav-bg py-3 bg-cover bg-no-repeat bg-center rancho flex justify-center items-center gap-2">
      <div>
        <img className="w-[75px]" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-6xl text-white">The Coffee Emporium</h1>
      </div>
    </div>
  );
};
