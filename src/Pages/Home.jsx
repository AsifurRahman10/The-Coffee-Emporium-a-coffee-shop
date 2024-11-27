import { Link, useLoaderData } from "react-router-dom";
import { Banner } from "../Component/Banner";
import { CoffeeCard } from "../Component/CoffeeCard";
import { BsCup } from "react-icons/bs";
import { useState } from "react";

import img1 from "../assets/images/cups/Rectangle 9.png";
import img2 from "../assets/images/cups/Rectangle 10.png";
import img3 from "../assets/images/cups/Rectangle 11.png";
import img4 from "../assets/images/cups/Rectangle 12.png";
import img5 from "../assets/images/cups/Rectangle 13.png";
import img6 from "../assets/images/cups/Rectangle 14.png";
import img7 from "../assets/images/cups/Rectangle 15.png";
import img8 from "../assets/images/cups/Rectangle 16.png";

export const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="py-24 bg-allCoffee-bg min-h-screen bg-cover bg-no-repeat">
        <div className="text-center w-11/12 md:w-9/12 mx-auto">
          <p className="raleway">--- Sip & Savor ---</p>
          <h2 className="text-[#331A15] text-6xl rancho">
            Our Popular Products
          </h2>
          <div className="flex justify-center items-center my-6">
            <Link to={"/addCoffee"}>
              <button className="btn rounded-md flex justify-center items-center text-2xl rancho bg-[#E3B577] border-4 border-[#331A15]">
                Add Coffee <BsCup className="text-[#331A15]" />
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffees={coffees}
                setCoffees={setCoffees}
                coffee={coffee}
              ></CoffeeCard>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center w-11/12 md:w-9/12 mx-auto pb-24">
        <p className="raleway">Follow Us Now</p>
        <h2 className="text-[#331A15] text-6xl rancho">Follow on Instagram</h2>
        <div className="grid md:grid-cols-4 gap-4 my-10 ">
          <img className="w-full" src={img2} alt="" />
          <img className="w-full" src={img1} alt="" />
          <img className="w-full" src={img3} alt="" />
          <img className="w-full" src={img4} alt="" />
          <img className="w-full" src={img5} alt="" />
          <img className="w-full" src={img6} alt="" />
          <img className="w-full" src={img7} alt="" />
          <img className="w-full" src={img8} alt="" />
        </div>
      </section>
    </div>
  );
};
