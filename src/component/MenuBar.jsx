import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul class="flex justify-items-end py-4 px-4 bg-slate-700">
            <li class="flex-2 mr-3">
                <Link to="/">
                    <a class="text-center rounded py-2 px-4 bg-slate-800 hover:bg-slate-400 text-white" href="#">Home</a>
                </Link>
            </li>
            <li class="flex-2 mr-3">
                <Link to="/about">
                    <a class="text-center rounded py-2 px-4 bg-slate-800 hover:bg-slate-400 text-white" href="#">About Us</a>
                </Link>
            </li>
            <li class="flex-2 mr-3">
                <Link to="/contact">
                    <a class="text-center rounded py-2 px-4 bg-slate-800 hover:bg-slate-400 text-white" href="#">Contact US</a>
                </Link>
            </li>
        </ul>
    //     <nav className="bg-gray-800">
    //     <ul className="flex items-center justify-center space-x-4 py-4">
    //       <li>
    //         <Link to="/" className="text-white">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/about" className="text-white">
    //           About Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/contact" className="text-white">
    //           Contact Us
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    )
}
export default NavBar