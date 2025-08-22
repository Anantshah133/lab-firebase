import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContextProvider";

const Dashboard = () => {
    const { handleLogout } = useContext(AuthContext);

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard