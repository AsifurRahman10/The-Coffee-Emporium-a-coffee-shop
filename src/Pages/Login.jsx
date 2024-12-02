import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((user) => {
      console.log(user);
      const lastCreated = user?.user?.metadata?.lastSignInTime;
      const updatedInfo = { email, lastCreated };
      fetch("http://localhost:5000/users", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  };
  return (
    <div className="bg-addCoffee-bg bg-cover pb-20">
      <form className="w-9/12 mx-auto py-[60px]" onSubmit={handleLogin}>
        <div className="grid grid-cols-1 gap-6 mt-8 w-1/2 mx-auto shadow-lg p-6">
          <div className="col-span-1">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-semibold raleway">
                  Email
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter Your email"
                name="email"
                className="input input-bordered w-full bg-white border-[#E3B577] rounded-md"
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
          <div className="w-full">
            <p className="mb-4">
              Don't have an account{" "}
              <Link to={"/registration"} className="font-bold text-[#E3B577]">
                Sign up
              </Link>
            </p>
            <button className="btn w-full bg-[#E3B577] border-2 border-transparent rounded-none rancho text-[#242222] text-2xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white  px-8">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
