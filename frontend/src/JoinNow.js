import React, { useState } from 'react';

const JoinNow = () => {
    const [formData, setFormData] = useState({ name: '', email: '', role: 'Individual Professional' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your request as a ${formData.role} has been submitted.`);
        console.log("Form Submitted:", formData);
    };

    return (
        <div style={{...styles.container, minHeight: '100vh'}}>
            <div style={styles.formCard}>
                <h2 style={styles.title}>Join CertiVerify Membership</h2>
                <p style={styles.subtitle}>Fill out the form below to get started.</p>
                
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>Full Name</label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        style={styles.input} 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                    />
                    
                    <label style={styles.label}>Email Address</label>
                    <input 
                        type="email" 
                        placeholder="john@example.com" 
                        style={styles.input} 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                    />
                    
                    <label style={styles.label}>Select Category</label>
                    <select 
                        style={styles.input}
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                        <option value="Individual Professional">Individual Professional</option>
                        <option value="Partner Organization">Partner Organization</option>
                        <option value="Academic Institution">Academic Institution</option>
                    </select>

                    <button type="submit" style={styles.submitBtn}>Join Now</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '60px', backgroundColor: '#f4f7f6' },
    formCard: { backgroundColor: '#fff', padding: '50px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', maxWidth: '600px', width: '100%' },
    title: { color: '#03244c', fontSize: '32px', marginBottom: '10px', textAlign: 'center' },
    subtitle: { color: '#7f8c8d', textAlign: 'center', marginBottom: '40px' },
    form: { display: 'flex', flexDirection: 'column' },
    label: { marginBottom: '8px', fontWeight: 'bold', color: '#34495e' },
    input: { padding: '12px', marginBottom: '25px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px' },
    submitBtn: { padding: '15px', backgroundColor: '#ff4d00', color: 'white', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }
};

export default JoinNow;