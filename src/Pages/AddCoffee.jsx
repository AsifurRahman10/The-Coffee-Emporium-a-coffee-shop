import { IoMdArrowRoundBack } from "react-icons/io";
import { Title } from "../Component/Title";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addCoffeeData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee is added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-addCoffee-bg bg-cover pb-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <Link to={"/"}>
          <button className="flex justify-center items-center text-2xl text-[#374151] rancho gap-2 mt-12">
            {" "}
            <IoMdArrowRoundBack className="text-lg" /> Back to home
          </button>
        </Link>
        <div className="bg-[#F4F3F0] pt-16 pb-20 mt-6">
          <Title
            title={"Add New Coffee"}
            description={
              "It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
            }
          ></Title>
          <form onSubmit={handleAddCoffee}>
            <div className="mx-20 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="col-span-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter coffee name"
                    name="name"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Chef
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter coffee chef"
                    name="chef"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Supplier
                    </span>
                  </div>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Taste
                    </span>
                  </div>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Enter coffee taste"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Category
                    </span>
                  </div>
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter coffee category"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Details
                    </span>
                  </div>
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter coffee details"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold raleway">
                      Photo
                    </span>
                  </div>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full border-none rounded-md bg-white"
                  />
                </label>
              </div>
              <div className="col-span-2 mt-4">
                <input
                  type="submit"
                  className="bg-[#D2B48C] btn w-full border-2 border-[#331A15]"
                  value=" Add Coffee"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
