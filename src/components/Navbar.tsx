import Logout from "./auth/Logout"

const Navbar = () => {
    return(
        <div className="flex justify-between bg-green-400 p-8 text-white">
            <p className="font-bold text-lg">My Task Manager</p>
            <Logout />
        </div>
    )
}