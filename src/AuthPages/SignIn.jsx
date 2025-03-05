import { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Nav from '../Shared/Nav';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const SignIn = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { createUserGoogle } = useContext(AuthContext);
  const { signInUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);


  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log('sign in user:', { email, password });


    signInUser(email, password)
      .then(result => {
        navigate(location?.state ? location.state : "/");
        toast.success('Successfully logged in!');
        console.log(result.user);
      })
      .catch(error => {
        toast.error('Failed to log in');
        console.error(error);
      })

  };
  const handleGoogle = () => {
    createUserGoogle()
      .then(result => {
        navigate(location?.state ? location.state : "/");
        toast.success('Successfully logged in with Google!');
        console.log(result.user);
      })
      .catch(error => {
        toast.error('Failed to log in with Google');
        console.error(error);
      })
  };

  return (
    <div>
      <Nav></Nav>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Helmet><title>Log In</title></Helmet>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-center text-2xl font-semibold mb-6">Log in with</h2>

          <div className="flex gap-4 mb-6">
            <button onClick={handleGoogle} className="flex items-center justify-center w-full py-2 px-4 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-200 transition">
              <img src="google.svg" alt="Google" className="w-5 mr-2" />
              Google
            </button>
          </div>

          <div className="relative text-center mb-6">
            <span className="bg-white px-3 text-gray-600">or</span>
          </div>


          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
                required
              />
            </div>

            <div className="relative">
              <input
                name='password'
                type={isPasswordShown ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
                required
              />
              <i
                onClick={() => setIsPasswordShown(prev => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {isPasswordShown ? <IoMdEye /> : <IoMdEyeOff />}
              </i>
            </div>

            <a href="#" className="text-sm text-indigo-600 hover:underline block">Forgot password?</a>

            <button onSubmit={signInUser}
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Log In
            </button>
          </form>

          <div className="text-center text-sm mt-6">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
