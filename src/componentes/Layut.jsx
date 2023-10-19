import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

const Layut = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Layut;