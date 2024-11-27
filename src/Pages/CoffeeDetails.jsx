import { Link, useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { IoMdArrowRoundBack } from "react-icons/io";

export const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffeeData;
  return (
    <div className="bg-addCoffee-bg h-[600px] bg-cover">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <Link to={"/"}>
          <button className="flex justify-center items-center text-2xl text-[#374151] rancho gap-2 mt-12">
            {" "}
            <IoMdArrowRoundBack className="text-lg" /> Back to home
          </button>
        </Link>
        <div className="bg-[#F4F3F0] pt-16 pb-20 mt-6 flex justify-evenly items-center">
          <div className="">
            <img src={photo} alt="" />
          </div>
          <div className="">
            <p className="text-lg font-medium text-gray-800">
              <span className="font-semibold">Name:</span> Americano Coffee
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Chef:</span> Mr. Matin Paul
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Supplier:</span> Cappu Authorizer
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Taste:</span> Sweet and hot
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Category:</span> Americano
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Details:</span> Espresso with hot
              water
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
