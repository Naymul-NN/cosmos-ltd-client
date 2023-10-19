import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layut = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layut;