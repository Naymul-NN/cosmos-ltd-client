import { Navigate } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">OOps! page not found</h1>
            <Navigate to="/">go home</Navigate>
        </div>
    );
};

export default ErrorPage;