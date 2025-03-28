import { useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
import Navbar from "../components/Navbar";


const EditUser = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    avatar: "/profile.png",
  });

  const [editing, setEditing] = useState(false);


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };



  return (
    <div className="flex items-center flex-col justify-center">
      <Navbar />
      <h1 className="mt-24 font-bold text-2xl">Update User Details</h1>
      <div className="max-w-sm sm:min-w-sm mx-auto bg-white shadow-md hover:shadow-xl mt-6 border-2 border-slate-200 rounded-xl p-6 text-center flex flex-col">
        <div className="relative w-24 h-24 mx-auto">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />
        </div>

        <div className="mt-4">
          {editing ? (
            <>
              <input
                type="text"
                name="first_name"
                value={""}
                onChange={handleChange}
                placeholder="First Name"
                className="border p-2 w-full rounded-lg text-center"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={""}
                onChange={handleChange}
                className="border p-2 w-full rounded-lg mt-2 text-center"
              />
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
                className="border p-2 w-full rounded-lg mt-2 text-center"
              />
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
              <p className="text-gray-500">{user.email}</p>
            </>
          )}
        </div>


        <button
          onClick={() => setEditing(!editing)}
          className={editing ? "bg-green-700 transition-all text-white mt-4 px-5 py-2 cursor-pointer rounded-lg shadow-md hover:bg-green-600 flex items-center gap-2 mx-auto" : "transition-all mt-4 cursor-pointer px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 flex items-center gap-2 mx-auto"}
        >
          {editing ? <FiSave size={20} /> : <FiEdit size={20} />}
          {editing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default EditUser;