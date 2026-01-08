import React from 'react';

const Network = () => {
  const regions = ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Delhi', 'Goa', 'Maharashtra', 'Telangana'];
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#03244c', minHeight: '100vh', color: 'white' }}>
      <h2>OUR REGIONAL NETWORK</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '40px' }}>
        {regions.map(region => (
          <div key={region} style={{ padding: '30px', backgroundColor: '#ffcc33', color: '#000', fontWeight: 'bold', borderRadius: '5px' }}>
            {region}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;