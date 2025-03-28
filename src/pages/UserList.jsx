import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import UserCard from "../components/UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setAllUsers } from "../redux/authSlice";
import UserTable from "../components/UserTable";
import { LuTable2 } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa6";



const UserList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const { allUsers } = useSelector((store) => store.auth);
    const [showTable, setShowTable] = useState("card");

    const fetchAllUsers = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/users?page=${currentPage}`);
            if (res?.data) {
                setUsers(res?.data);
                dispatch(setAllUsers(res?.data?.data))
            }
        } catch (error) {
            console.log(error)
        }
    };


    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const res = await axios.delete(`${BASE_URL}/api/users/${id}`);

            if (res.status === 204) {
                dispatch(deleteUser(id));
                toast.success("User Deleted Successfully ✅");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong!");
            console.log(error);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setShowTable(window.innerWidth <= 768 ? "card" : "table");
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        fetchAllUsers()
    }, [currentPage]);

    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar />

            <h1 className="mt-24 text-center text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg">
                All Registered Users
            </h1>

            <div className={`hidden md:flex items-center w-[80%] justify-end mt-2 `}>
                <div className="flex items-center justify-center gap-4 rounded-2xl px-5 bg-slate-200 p-3">
                    <LuTable2 size={20} onClick={() => setShowTable("table")} className={`hover:scale-110 hover:font-bold hover:text-blue-600 transition-all ${showTable === "table" && "text-red-600"}`} title="Table View" />
                    <FaRegAddressCard size={20} onClick={() => setShowTable("card")} className={`hover:scale-110 hover:font-bold hover:text-blue-600 transition-all ${showTable !== "table" && "text-red-600"} `} title="Card View" />
                </div>
            </div>

            {
                showTable !== "card" ?
                    <UserTable users={allUsers} handleDelete={handleDelete} />
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-3">
                        {
                            allUsers?.map((user) => (
                                <UserCard handleDelete={handleDelete} user={user} key={user?.id} />
                            ))
                        }
                    </div>
            }

            {
                allUsers?.length && <Pagination currentPage={currentPage} totalPages={users?.total_pages} onPageChange={setCurrentPage} />
            }
        </div>
    )
}

export default UserList;