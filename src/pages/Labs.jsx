import { useContext, useState } from "react";
import { LabContext } from "../contexts/LabContextProvider";

const Labs = () => {
    const { labs, addLab, deleteLab, loading } = useContext(LabContext);
    const [form, setForm] = useState({ name: "", capacity: "", location: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.capacity || !form.location) {
            alert("Please fill all fields");
            return;
        }
        await addLab(form);
        setForm({ name: "", capacity: "", location: "" });
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Labs Management</h1>

            {/* Add Lab Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-5 rounded-lg shadow-lg mb-5 max-w-md"
            >
                <input
                    type="text"
                    placeholder="Lab Name"
                    className="w-full mb-3 p-2 rounded border"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Capacity"
                    className="w-full mb-3 p-2 rounded border"
                    value={form.capacity}
                    onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    className="w-full mb-3 p-2 rounded border"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Lab
                </button>
            </form>

            {/* Labs List */}
            {loading ? (
                <p>Loading labs...</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Capacity</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labs.map((lab) => (
                            <tr key={lab.id}>
                                <td className="border px-4 py-2">{lab.name}</td>
                                <td className="border px-4 py-2">{lab.capacity}</td>
                                <td className="border px-4 py-2">{lab.location}</td>
                                <td className="border px-4 py-2 text-center">
                                    <button
                                        onClick={() => deleteLab(lab.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Labs;