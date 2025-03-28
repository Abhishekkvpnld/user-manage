import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users, handleDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="hidden md:block overflow-x-auto w-[80%] mt-3">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Avatar</th>
                        <th className="py-3 px-6 text-left">User Name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-100 transition">
                            <td className="py-3 px-6">
                                <img
                                    src={user?.avatar}
                                    alt={user?.first_name}
                                    className="w-12 h-12 rounded-full border border-gray-300"
                                />
                            </td>
                            <td className="py-3 px-6">{user?.first_name} {user?.last_name}</td>
                            <td className="py-3 px-6">{user?.email}</td>
                            <td className="py-3 px-6 flex justify-center gap-4">
                                <button
                                    onClick={() => navigate(`/update-profile/${user?.id}`)}
                                    className="text-blue-500 hover:text-blue-700 hover:scale-110 transition-all"
                                    title="Edit"
                                >
                                    <FiEdit size={20} />
                                </button>
                                <button
                                    title="Delete"
                                    onClick={() => handleDelete(user.id)}
                                    className="text-red-500 hover:text-red-700 hover:scale-110 transition-all"
                                >
                                    <FiTrash2 size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
