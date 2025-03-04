import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import Nav from '../Shared/Nav';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const Register = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const { createUser, createUserGoogle } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log('Registering user:', { email, password });


        createUser(email, password)
            .then(result => {
                toast.success('Successfully Account Created');
                console.log(result.user);
            })
            .catch(error => {
                toast.error('Failed to Create Account');
                console.error(error);
            })
    };
    const handleGoogle = () => {
        createUserGoogle()
            .then(result => {
                toast.success('Successfully Register with Google!');
                console.log(result.user);
            })
            .catch(error => {
                toast.error('Failed to Register with Google');
                console.error(error);
            })
    };

    return (
        <div>
            <Nav></Nav>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Helmet><title>Register</title></Helmet>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h2 className="text-center text-2xl font-semibold mb-6">Sign up with</h2>

                    <div className="flex gap-4 mb-6">
                        <button onClick={handleGoogle} className="flex items-center justify-center w-full py-2 px-4 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-200 transition">
                            <img src="google.svg" alt="Google" className="w-5 mr-2" />
                            Google
                        </button>
                    </div>

                    <div className="relative text-center mb-6">
                        <span className="bg-white px-3 text-gray-600">or</span>
                    </div>

                    <form className="space-y-4" onSubmit={handleRegister}>
                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email address"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
                                aria-label="Email"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                name="password"
                                type={isPasswordShown ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
                                aria-label="Password"
                                required
                            />
                            <i
                                onClick={() => setIsPasswordShown(prev => !prev)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                aria-label="Toggle Password Visibility"
                            >
                                {isPasswordShown ? <IoMdEye /> : <IoMdEyeOff />}
                            </i>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                            Register
                        </button>
                    </form>

                    <div className="text-center text-sm mt-6">
                        Already have an account?{' '}
                        <Link to="/login" className="text-indigo-600 hover:underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
