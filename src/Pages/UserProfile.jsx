import Nav from "../Shared/Nav";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    return (
        <div>
            <Helmet><title>User Profile</title></Helmet>
            <Nav></Nav>
            user profile
        </div>
    );
};

export default UserProfile;