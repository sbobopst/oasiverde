import { BiBed, BiQuestionMark } from "react-icons/bi"
import { BsQuestionCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import Profile from "./Profile"
const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-2xl fixed left-0 right-0 flex md:flex-row md:justify-around justify-around  place-content-center items-center min-h-24 z-10">
            <div className="flex flex-col  ">
                <Link to="/"> <h1 className="transition-all hover:scale-105 md:text-5xl text-2xl text-green-700 flex justify-center items-center font-bold ">Oasi Verde</h1> </Link>
                <ul className="flex justify-center space-x-3 md:text-xl  text-white">
                    <Link to="/rooms" className="transition-all hover:scale-105 flex items-center space-x-1"><BiBed /> <li> Stanze </li ></Link>
                    <Link to="/about" className="transition-all hover:scale-105 flex items-center space-x-1"><BsQuestionCircle /> <li>About</li></Link>
                </ul>
            </div>
            <Profile />
        </nav >
    )
}

export default Navbar


