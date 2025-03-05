import { useContext } from "react";
import Nav from "../Shared/Nav";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Nav />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                <Helmet><title>User Profile</title></Helmet>
                <div className="mt-10 bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-24 h-24 rounded-full border-2 border-gray-300"
                            src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            alt="User Profile"
                        />
                        <h1 className="text-xl font-bold mt-4">{user.displayName || "No User Name"}</h1>
                        <p className="text-gray-600">{user.email || "Email not available"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
