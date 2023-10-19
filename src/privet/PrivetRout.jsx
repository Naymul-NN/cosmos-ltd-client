import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";


const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user,loading}= useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    
  if(user){
    return children;
}

 return <Navigate state={location.pathname} to="/login"></Navigate>;
    
};

export default PrivetRout;