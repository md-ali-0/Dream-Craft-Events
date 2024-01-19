/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";




const PrivateRoute = ({children}) => {
    
    const {user,loading} =useContext(AuthContext);

    console.log("loading  : ",loading);

    const location = useLocation();

    //need to wait here
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    // user cheek
    if(!user?.email){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children
};

export default PrivateRoute;