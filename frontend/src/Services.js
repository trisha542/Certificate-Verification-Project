import React from 'react';

const Services = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2 style={{ color: '#03244c', borderBottom: '3px solid #e67e22', display: 'inline-block' }}>OUR SERVICES</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
      <div style={cardStyle}>
        <h3>Instant Verification</h3>
        <p>Real-time validation of digital certificates via unique IDs.</p>
      </div>
      <div style={cardStyle}>
        <h3>Secure Storage</h3>
        <p>Encrypted document handling for all institutional records.</p>
      </div>
    </div>
  </div>
);

const cardStyle = { padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '250px' };

export default Services;