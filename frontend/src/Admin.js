import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [file, setFile] = useState(null);
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/students');
            setStudents(res.data);
        } catch (err) {
            console.error("Error fetching data", err);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleUpload = async () => {
        if (!file) return alert("Please select a file!");
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('http://localhost:5000/api/upload', formData);
            alert("Data Uploaded Successfully!");
            fetchStudents();
        } catch (err) {
            alert("Upload Failed! Check Excel headers.");
        }
    };

    const deleteCertificate = async (id) => {
        if (window.confirm("Delete this record?")) {
            try {
                await axios.delete(`http://localhost:5000/api/delete/${id}`);
                alert("Deleted!");
                fetchStudents();
            } catch (err) {
                console.error("Delete failed", err);
            }
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Admin Dashboard</h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload} style={{ marginLeft: '10px' }}>Upload Excel</button>
            
            <h3 style={{ marginTop: '40px' }}>Current Database Records</h3>
            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#eee" }}>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Domain</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s._id}>
                            <td>{s.certificateId}</td>
                            <td>{s.studentName}</td>
                            <td>{s.internshipDomain}</td>
                            <td>
                                <button onClick={() => deleteCertificate(s._id)} style={{ color: "red" }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;