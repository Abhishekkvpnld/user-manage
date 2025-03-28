import { MdOutlineDeleteOutline } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";


const UserCard = () => {

  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 shadow-lg bg-white/80 backdrop-blur-lg flex flex-col w-80 p-5 rounded-2xl transition-all hover:shadow-xl hover:scale-105">


      <div className="flex items-center space-x-4">
        <img
          src="/profile.png"
          className="rounded-full w-16 h-16 border-2 border-blue-500 shadow-md"
          alt="Profile"
        />

        <div>
          <h1 className="text-lg font-bold text-gray-800">John Doe</h1>
          <p className="text-sm font-medium text-gray-500">johndoe@example.com</p>
        </div>
      </div>


      <div className="w-full flex items-center gap-3 justify-end mt-4">
        <MdOutlineDeleteOutline
          title="Delete"
          size={28}
          className="rounded-full p-1 transition-all hover:scale-110 hover:bg-red-600 hover:text-white cursor-pointer"
        />
        <ImProfile
          title="Profile"
          onClick={()=>navigate("/update-profile/1")}
          size={28}
          className="rounded-full p-1 transition-all hover:bg-blue-600 hover:scale-110 hover:text-white cursor-pointer"
        />
      </div>

    </div>
  )
}

export default UserCard