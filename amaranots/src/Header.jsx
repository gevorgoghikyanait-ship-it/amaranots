import React from 'react';
function Header() { return ( <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "#ffffff", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)" }}>
  {/* Ձախ կողմ՝ Լոգո և Մենյուի տեքստեր */}
  <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
    <img 
      src="https://amaranoc.am/images/logo.svg" 
      alt="Logo" 
      style={{ height: "35px", cursor: "pointer" }} 
    />
    
    <div style={{ display: "flex", gap: "20px" }}>
      <p style={{ cursor: "pointer", margin: 0, fontSize: "16px", color: "#333" }}>Գլխավոր</p>
      <p style={{ cursor: "pointer", margin: 0, fontSize: "16px", color: "#333" }}>Զեղչեր</p>
      <p style={{ cursor: "pointer", margin: 0, fontSize: "16px", color: "#333" }}>Ծառայություններ</p>
      <p style={{ cursor: "pointer", margin: 0, fontSize: "16px", color: "#333" }}>Մեր մասին</p>
    </div>
  </div>

  {}
  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
    <span style={{ cursor: "pointer", fontSize: "18px" }}>🌐</span>
    <span style={{ cursor: "pointer", fontSize: "18px" }}>👤</span>

    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      border: "1px solid #ccc", 
      borderRadius: "20px", 
      padding: "5px 12px", 
      backgroundColor: "#fff" 
    }}>
      <input 
        type="text" 
        placeholder="Որոնում" 
        style={{ 
          border: "none", 
          outline: "none", 
          fontSize: "14px",
          backgroundColor: "transparent"
        }} 
      />
      <span style={{ cursor: "pointer", marginLeft: "5px" }}>🔍</span>
    </div>
  </div>

</header>
); }
 
export default Header; 