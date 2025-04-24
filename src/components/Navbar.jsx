import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-title">✨ Pokedex ✨</div>
        <div className="nav-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Pokedex
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
