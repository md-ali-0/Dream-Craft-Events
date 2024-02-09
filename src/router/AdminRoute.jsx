import { Navigate } from "react-router-dom";
import Loading from "../components/loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const [admin, isAdminPending] = useAdmin();

    if (loading || isAdminPending) {
        return <Loading />;
    }
    if (user && admin) {
        return children;
    }
    return <Navigate to="/login" replace/>;
};

export default AdminRouter;
