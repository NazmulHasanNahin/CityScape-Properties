import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Layouts/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Home/Home";
import UserProfile from "../Pages/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import SignIn from "../AuthPages/SignIn";
import Register from "../AuthPages/Register";
import Property from "../Property/Property";
import PrivateRoute from "../Provider/PrivateRoute";




const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/user_profile",
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
            },
            {
                path: "/update_profile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/login",
                element: <SignIn></SignIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/property/:id",
                element: <PrivateRoute><Property></Property></PrivateRoute>,
                loader: () => fetch("/prop_data.json"),
            },


        ]
    },
]);

export default Routes;