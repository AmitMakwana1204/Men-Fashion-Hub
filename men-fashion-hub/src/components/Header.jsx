import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Men Fashion Hub</div>
      <div className="search-box">
        <input type="text" placeholder="Search for products..." />
        <button><FaSearch /></button>
      </div>
      <nav>
        <a>#Home</a>
        <a>#Clothing</a>
        <a>#Footwear</a>
        <a>#Accessories</a>
        <a>#Cart <FaShoppingCart /></a>
      </nav>
    </header>
  );
};

export default Header;
