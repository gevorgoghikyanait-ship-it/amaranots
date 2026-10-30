import React from 'react';

function Card({ title, price, location, image }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      overflow: 'hidden',
      width: '280px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      margin: '15px',
      textAlign: 'left'
    }}>
      <img src={image} alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{title}</h3>
        <p style={{ margin: '5px 0', color: '#7f8c8d' }}>📍 {location}</p>
        <p style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '18px', margin: '10px 0' }}>{price} ֏ / օր</p>
        <button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Տեսնել ավելին
        </button>
      </div>
    </div>
  );
}

export default Card;