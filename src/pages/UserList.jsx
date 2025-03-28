import { useState } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import UserCard from "../components/UserCard";



const UserList = () => {

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col items-center">
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-3">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>

            <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
        </div>
    )
}

export default UserList;