import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        
        return () => unsubscribe();
    }, []);

    console.log(user);

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;