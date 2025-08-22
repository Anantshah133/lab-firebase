import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Comp }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
    }, [user]);

    return (
        <>
            {user ? <Comp /> : null}
        </>
    )
}

export default ProtectedRoute