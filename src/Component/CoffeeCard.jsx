import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, chef, photo } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="flex items-center justify-between p-12 bg-[#F5F4F1] bg-opacity-60 rounded-lg shadow-md">
      {/* Image Section */}
      <img src={photo} alt="Coffee Cup" className="object-cover rounded-md" />

      {/* Coffee Details */}
      <div className="flex-1 ml-4 text-left space-y-3 raleway">
        <h2 className="text-lg font-semibold text-gray-800">Name : {name}</h2>
        <p className="text-lg text-gray-600">Chef: {chef}</p>
        <p className="text-lg font-medium text-gray-700">Price: 890 Taka</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2">
        <Link to={`/coffeeDetails/${_id}`}>
          <button
            className="bg-[#D2B48C] hover:bg-gray-400 rounded-lg w-10 h-10 text-gray-600 flex justify-center items-center"
            title="View"
          >
            <FaEye className="text-white text-xl" />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button
            className="bg-[#3C393B] hover:bg-gray-400 rounded-lg w-10 h-10 text-gray-600 flex justify-center items-center"
            title="View"
          >
            <FaPen className="text-white text-xl" />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] hover:bg-gray-400 rounded-lg w-10 h-10 text-gray-600 flex justify-center items-center"
          title="View"
        >
          <MdDelete className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};
