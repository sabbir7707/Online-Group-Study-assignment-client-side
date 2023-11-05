import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";


const Private_Route = ({children}) => {

    const {loding,userr} =useContext(AuthContext)
    if (loding) {
        return <div className="progress w-full"></div>
        
    }
    if (!loding && !userr?.email) {
        return <Navigate to ="/login"/>
        
    }
    return children;
};

export default Private_Route;