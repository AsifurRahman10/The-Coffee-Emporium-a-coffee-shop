import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";

export const Registration = () => {
  const { emailRegister } = useContext(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    const userDB = { name, email, password, photo };
    emailRegister(email, password).then((user) => {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userDB),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "User has been created",
              icon: "success",
              confirmButtonText: "Cool",
            });
            form.reset();
          }
        });
    });
  };
  return (
    <div className="bg-addCoffee-bg bg-cover">
      <form className="w-9/12 mx-auto py-[60px]" onSubmit={handleRegistration}>
        <div className="grid grid-cols-1 gap-6 mt-8 w-1/2 mx-auto shadow-lg p-6">
          <div className="col-span-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-semibold raleway">
                  Name
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered w-full bg-white border-[#E3B577] rounded-md"
              />
            </label>
          </div>
          <div className="col-span-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-semibold raleway">
                  Email
                </span>
              </div>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                className="input input-bordered w-full border-[#E3B577] rounded-md"
              />
            </label>
          </div>
          <div className="col-span-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-semibold raleway">
                  Password
                </span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input input-bordered w-full border-[#E3B577] rounded-md"
              />
            </label>
          </div>
          <div className="col-span-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-semibold raleway">
                  PhotoURL
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter your Photo Url"
                name="photo"
                className="input input-bordered w-full border-[#E3B577] rounded-md"
              />
            </label>
          </div>
          <div className="w-full">
            <p className="mb-4">
              Already have an account?
              <Link to={"/login"} className="font-bold text-[#E3B577]">
                Sign in
              </Link>
            </p>
            <button className="btn w-full bg-[#E3B577] border-2 border-transparent rounded-none rancho text-[#242222] text-2xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white  px-8">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
