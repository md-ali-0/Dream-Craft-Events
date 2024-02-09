import { Navigate, useLocation } from "react-router-dom";

import Loading from "../components/loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
    const { user, isLoading } = useAuth();

    const location = useLocation();
    
    if (isLoading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace/>;
};

export default PrivateRouter;