import { NavLink } from "react-router-dom";
import "./Navbar.css"

const link = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Favorites">Favorites</NavLink>
    <NavLink to="/Login">Login</NavLink>
</>

const Navbar = () => {
    return (
        <div className="max-w-6xl mx-auto mb-3">
            <div className="navbar  text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4 text-base">
                            {link}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-semibold">Favorites</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-xl">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn normal-case hover:bg-pink-800 border-none bg-pink-600 text-white text-xl">Button</a>
                </div>
            </div>


        </div>
    );
};

export default Navbar;