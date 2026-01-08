import React from 'react';

const FAQ = () => (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#2c3e50' }}>Frequently Asked Questions</h2>
        <div style={{ marginTop: '20px' }}>
            <h3>How do I verify a certificate?</h3>
            <p>Enter the unique Certificate ID on the Home Portal and click "Verify".</p>
            <hr/>
            <h3>What if my certificate is not found?</h3>
            <p>Please contact the issuing authority or check if the ID entered is correct.</p>
        </div>
    </div>
);

export default FAQ;