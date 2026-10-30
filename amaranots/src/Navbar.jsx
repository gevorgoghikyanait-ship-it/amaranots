import React from 'react';

function Navbar() {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 30px', 
      backgroundColor: '#1a252f', 
      color: '#fff' 
    }}>
      <h2>Amaranots.am</h2>
      <nav>
        <a href="#home" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Գլխավոր</a>
        <a href="#catalog" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Ամառանոցներ</a>
        <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Կապ</a>
      </nav>
    </header>
  );
}

export default Navbar;