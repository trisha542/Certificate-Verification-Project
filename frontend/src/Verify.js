
import React, { useState } from 'react';
import axios from 'axios';

const VerifyCertificate = () => {
    const [id, setId] = useState('');

    const handleVerify = async () => {
        if (!id) return alert("Please enter a Certificate ID");
        
        try {
            const res = await axios.get(`http://localhost:5000/api/verify/${id}`);
            
            if (res.data) {
                window.open(`/certificate/${id}`, '_blank');
            }
        } catch (err) {
            alert("Certificate not found! Please check the ID.");
            console.error(err);
        }
    };

    const handleSearchByName = async (name) => {
        if (name.length < 3) return; 
        try {
            const res = await axios.get(`http://localhost:5000/api/search-name/${name}`);
            if (res.data && res.data.certificateId) {
                window.open(`/certificate/${res.data.certificateId}`, '_blank');
            }
        } catch (err) { 
            console.log("Searching..."); 
        }
    };

    return (
        <div style={styles.container}>
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>E-Verification Portal</h1>
                <p style={styles.heroSubtitle}>Fast, Secure, and Reliable Certificate Verification Services</p>
                
                <div style={styles.searchContainer}>
                    <div style={styles.inputGroup}>
                        <input 
                            type="text" 
                            placeholder="Enter Certificate ID" 
                            value={id}
                            onChange={(e) => setId(e.target.value)} 
                            style={styles.input}
                        />
                        <button onClick={handleVerify} style={styles.verifyBtn}>Verify by ID</button>
                    </div>

                    <p style={{ margin: '15px 0', color: '#ccc' }}>— OR —</p>

                    <div style={styles.inputGroup}>
                        <input 
                            type="text" 
                            placeholder="Search by Student Name" 
                            onChange={(e) => handleSearchByName(e.target.value)} 
                            style={styles.inputLong}
                        />
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>HOW IT WORKS</h2>
                <div style={styles.grid}>
                    <div style={styles.stepCard}>
                        <div style={styles.iconCircle}>1</div>
                        <h3>Enter Details</h3>
                        <p>Provide the unique Certificate ID or Student Name.</p>
                    </div>
                    <div style={styles.stepCard}>
                        <div style={styles.iconCircle}>2</div>
                        <h3>Request Verification</h3>
                        <p>System fetches data from our secure database.</p>
                    </div>
                    <div style={styles.stepCard}>
                        <div style={styles.iconCircle}>3</div>
                        <h3>View Certificate</h3>
                        <p>The verified certificate opens in a professional new window.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: { fontFamily: 'Arial, sans-serif' },
    hero: { 
        padding: '100px 20px', 
        textAlign: 'center', 
        backgroundColor: '#03244c', 
        color: 'white'
    },
    heroTitle: { fontSize: '42px', marginBottom: '10px' },
    heroSubtitle: { fontSize: '18px', opacity: 0.8 },
    searchContainer: { maxWidth: '500px', margin: '40px auto' },
    inputGroup: { display: 'flex', justifyContent: 'center' },
    input: { padding: '15px', width: '250px', borderRadius: '5px 0 0 5px', border: 'none', fontSize: '16px' },
    inputLong: { padding: '15px', width: '350px', borderRadius: '5px', border: 'none', fontSize: '16px' },
    verifyBtn: { 
        padding: '15px 25px', 
        borderRadius: '0 5px 5px 0', 
        border: 'none', 
        backgroundColor: '#e67e22', 
        color: 'white', 
        cursor: 'pointer', 
        fontWeight: 'bold' 
    },
    section: { padding: '80px 20px', textAlign: 'center', backgroundColor: '#fff' },
    sectionTitle: { fontSize: '30px', marginBottom: '50px', color: '#03244c' },
    grid: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' },
    stepCard: { 
        width: '280px', 
        padding: '30px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
    },
    iconCircle: { 
        width: '50px', 
        height: '50px', 
        borderRadius: '50%', 
        backgroundColor: '#e67e22', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: '0 auto 20px',
        fontSize: '20px',
        fontWeight: 'bold'
    }
};

export default VerifyCertificate;