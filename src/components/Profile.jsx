import { FaUser } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
    const [dropMenu, setDropMenu] = useState(false);
    return (
        <button className="transition-all hover:scale-105 min-h-8 md:text-xl text-white" onMouseOver={() => setDropMenu(true)} onMouseLeave={() => setDropMenu(false)}> <FaUser />
            {
                dropMenu &&
                <ul className="relative">
                    <div className="absolute rounded-md border border-gray-700 top-1 -end-full bg-gray-800">
                        <Link to="/login"><li className="hover:bg-green-400 rounded-md">Login</li></Link>
                        <Link to="/register"> <li className="hover:bg-green-400 rounded-md">Register</li></Link>
                    </div>
                </ul>
            }
        </button>
    )
}

export default Profile