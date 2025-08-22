import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);  
        });
        
        return () => unsubscribe();
    }, []);

    const handleLogin = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const handleLogout = async () => {
        return await signOut(auth);
    }

    const value = {
        user, handleLogin, handleLogout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;