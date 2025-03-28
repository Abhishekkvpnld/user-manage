import { useEffect, useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import UpdateUserForm from "../components/UpdateUserForm";

const EditUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const [editing, setEditing] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/users/${id}`);
      if (res?.data) {
        setUser(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch user data");
    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex items-center flex-col justify-center">
      <Navbar />
      <h1 className="mt-24 font-bold text-2xl">Update User Details</h1>
      <div className="max-w-sm sm:min-w-sm mx-auto bg-white shadow-md hover:shadow-xl mt-6 border-2 border-slate-200 rounded-xl p-6 text-center flex flex-col">
        <div className="relative w-24 h-24 mx-auto">
          <img
            src={user?.avatar || "/profile.png"}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />
        </div>

        <div className="mt-4">
          {editing ? (
            <UpdateUserForm  id={user?.id} setEditing={setEditing} user={user} />
          ) : (
            <>
              <h2 className="text-xl font-semibold">{user?.first_name} {user?.last_name}</h2>
              <p className="text-gray-500">{user?.email}</p>
            </>
          )}
        </div>

        {
          !editing && (
            <button
              onClick={() => setEditing(true)}
              className={`mt-4 px-5 py-2 rounded-lg shadow-md flex items-center gap-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white`}
            >
              <FiEdit size={20} />
              Edit
            </button>
          )
        }
      </div>
    </div>
  );
};

export default EditUser;
