import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="bg-gray-50">
            <Header></Header>
            <div className="max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto px-2 lg:px-0">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;