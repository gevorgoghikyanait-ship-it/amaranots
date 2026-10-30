
import React from 'react';
import Header from './Header';
import Cards from './componets/Card';
import Footer from './componets/footer';
import Filter from './componets/filter';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <div className="page-layout">
        <Filter />
        <Cards />
      </div>

      <Footer />
    </div>
  );
}

export default App;
