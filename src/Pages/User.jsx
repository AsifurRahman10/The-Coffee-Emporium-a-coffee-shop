import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export const User = () => {
  const userData = useLoaderData();
  const [user, setUser] = useState(userData);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "User has been deleted",
          icon: "success",
          confirmButtonText: "Cool",
        });
        const newUsers = user.filter((u) => u._id !== _id);
        setUser(newUsers);
      });
  };

  return (
    <div className="w-9/12 mx-auto min-h-[400px]">
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Photo</th>
              <th>Last login</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => {
              console.log(item);
              return (
                <tr className="hover:bg-base-200" key={item._id}>
                  <th>1</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <img className="w-10" src={item.photo} alt="" />
                  </td>
                  <td>{item.lastSignInTime ? item.lastSignInTime : ""}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-[#E3B577] border-2 border-transparent rounded-none rancho text-[#242222] text-2xl hover:bg-transparent hover:border-2 "
                    >
                      Delete user
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
