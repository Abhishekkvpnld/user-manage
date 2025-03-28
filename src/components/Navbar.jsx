import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
        toast.success("Logged Out Successfully ✅");
    };

    return (
        <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex justify-between h-16 items-center">


                    <Link to="/" className="text-2xl font-bold tracking-wide text-blue-400">
                        Admin
                    </Link>


                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                        <Link to="/settings" className="hover:text-blue-400 transition">Settings</Link>
                    </div>


                    <div className="relative hidden md:block">
                        <button
                            title="Profile"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center space-x-2 focus:outline-none hover:scale-105 transition"
                        >
                            <img src="/profile.png" alt="Admin" className="h-10 w-10 rounded-full border-2 border-blue-400" />
                            <span className="hidden md:inline font-semibold cursor-pointer">John Doe</span>
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded-lg py-2 px-2">
                                <Link to="/" className="block font-semibold px-4 py-2 text-center hover:border-2 transition-all hover:bg-blue-200 rounded-2xl hover:border-blue-500">Profile</Link>
                                <button onClick={handleLogout} className="block w-full px-4 py-2 font-semibold hover:border-2 hover:border-red-400 transition-all hover:bg-red-200 rounded-2xl mt-1">Logout</button>
                            </div>
                        )}
                    </div>


                    <button onClick={() => setNavOpen(!navOpen)} className="md:hidden text-xl">
                        {navOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900/90 backdrop-blur-md p-5 text-center">
                    <Link to="/" className="block py-2 text-lg hover:text-blue-400 transition">Home</Link>
                    <Link to="/users" className="block py-2 text-lg hover:text-blue-400 transition">Users</Link>
                    <hr className="my-2 border-gray-600" />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="w-full flex justify-center items-center space-x-2 py-3 text-lg">
                        <img src="/profile.png" alt="Admin" className="h-10 w-10 rounded-full border-2 border-blue-400" />
                        <span>Admin</span>
                    </button>
                    {menuOpen && (
                        <div className="mt-2 w-full bg-white text-black shadow-md rounded-lg py-2">
                            <Link to="/" className="block px-4 py-2 font-semibold hover:bg-blue-100 transition">Profile</Link>
                            <Link to="/" className="block px-4 py-2 font-semibold hover:bg-red-100 transition">Logout</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
