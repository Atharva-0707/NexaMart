import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
        Legal & Site Disclaimer
      </h2>
      
      <p style={{ marginBottom: '20px' }}>
        NexaMart is a demonstration e-commerce project created for educational and portfolio purposes. It is not intended for commercial use.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>1. Product Information</h4>
      <p style={{ marginBottom: '15px' }}>
        Product details, images, descriptions, and prices displayed on this website may be sample data and are provided for demonstration purposes only.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>2. No Real Transactions</h4>
      <p style={{ marginBottom: '15px' }}>
        Any payment, order, or checkout functionality implemented in this project is for testing and learning purposes. No actual commercial transactions are processed unless explicitly stated.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>3. Limitation of Liability</h4>
      <p style={{ marginBottom: '15px' }}>
        NexaMart and its developer shall not be held responsible for any loss, damage, or inconvenience arising from the use of this demonstration website or reliance on its content.
      </p>

      <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem' }}>
        By interacting natively within this codebase, you unconditionally signal acceptance bounded by these parameters efficiently.
      </p>
    </div>
  );
};

export default Disclaimer;