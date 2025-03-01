import Nav from "../Shared/Nav";
import DiscoverProperty from "./DiscoverProperty";
import Slider_ from "./Slider_";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="p-4">
            <Helmet><title>Home</title></Helmet>
            <Nav></Nav>
            <Slider_></Slider_>
            <DiscoverProperty></DiscoverProperty>
        </div>
    );
};

export default Home;