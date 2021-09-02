import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="menu">
      <div>Book store</div>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
    <div>
      User
    </div>
  </header>
);

export default Header;
