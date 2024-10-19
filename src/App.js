import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ThankYou from './pages/ThankYou';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/thank-you/:productName" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
