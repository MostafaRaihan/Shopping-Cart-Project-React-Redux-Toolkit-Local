import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="links">
        Raihan Mobile Shop
      </Link>
      <Link to="/cart" className="links">
        Your Cart <ShoppingCart size={30} className="cartIcon" />
      </Link>
    </nav>
  );
};

export default Navbar;
