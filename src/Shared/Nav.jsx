import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
    const location = useLocation();
    const [user, setUser] = useState(null); 

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const loggedUser = localStorage.getItem("user");
        setUser(loggedUser ? JSON.parse(loggedUser) : null);
    }, []);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    to="/"
                                    className={`btn ${isActive("/") ? "bg-blue-500 text-white" : "btn-ghost"}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/user_profile"
                                    className={`btn ${isActive("/user_profile") ? "bg-blue-500 text-white" : "btn-ghost"}`}>
                                    User Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/update_profile"
                                    className={`btn ${isActive("/update_profile") ? "bg-blue-500 text-white" : "btn-ghost"}`}>
                                    Update Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold text-gray-800">CityScape Properties</Link>
                </div>

                {/* Desktop Navbar */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <li>
                            <NavLink
                                to="/"
                                className={`btn ${isActive("/") ? "bg-blue-500 text-white" : "btn-ghost"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user_profile"
                                className={`btn ${isActive("/user_profile") ? "bg-blue-500 text-white" : "btn-ghost"}`}>
                                User Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/update_profile"
                                className={`btn ${isActive("/update_profile") ? "bg-blue-500 text-white" : "btn-ghost"}`}>
                                Update Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end space-x-4">
                    {user ? (
                        <>
                            <div className="flex items-center space-x-2">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Profile" />
                                    </div>
                                </div>
                                <span className="text-lg font-semibold">{user.name}</span>
                            </div>
                            <button onClick={handleLogout} className="btn bg-red-500 text-white">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn bg-blue-500 text-white">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="btn bg-red-400 text-white">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
