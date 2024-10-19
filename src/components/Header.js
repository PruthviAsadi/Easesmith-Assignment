import React from 'react';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="icons">
        <i className="fa fa-user"></i>
        <i className="fa fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
