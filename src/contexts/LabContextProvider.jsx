import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react"
import { db } from "../config/firebase";

export const LabContext = createContext();

const LabContextProvider = ({ children }) => {
    const [labs, setLabs] = useState([]);
    const [loading, setLoading] = useState(false);

    const labsCollectionRef = collection(db, "labs");
    // Fetch labs from Firestore
    const fetchLabs = async () => {
        setLoading(true);
        try {
            const snapshot = await getDocs(labsCollectionRef);
            const labsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLabs(labsData);
        } catch (error) {
            console.error("Error fetching labs:", error);
        } finally {
            setLoading(false);
        }
    };

    // Add new lab
    const addLab = async (lab) => {
        try {
            await addDoc(labsCollectionRef, {
                ...lab,
                createdAt: new Date(),
            });
            fetchLabs();
        } catch (error) {
            console.error("Error adding lab:", error);
        }
    };

    // Delete lab
    const deleteLab = async (id) => {
        try {
            const labDoc = doc(db, "labs", id);
            await deleteDoc(labDoc);
            fetchLabs();
        } catch (error) {
            console.error("Error deleting lab:", error);
        }
    };

    useEffect(() => {
        fetchLabs();
    }, []);

    const value = {
        labs, addLab, deleteLab, fetchLabs
    }

    return (
        <LabContext.Provider value={value}>
            {children}
        </LabContext.Provider>
    )
}

export default LabContextProvider