import React from 'react';
import { NavLink } from "react-router-dom";
import ImageProject from "./Image";
//import './header.css';
import '../App.css';

const Header = () => {
  const img = [
    { id: "logo" },
  ]
  return (
    <header className="header">
      {img.map((image) => {
        return <ImageProject key={image} nombre={image.id} />
      })}
      <nav className="navHeader">
        <ul>
          <li><NavLink to="/" exact={true}>Home</NavLink></li>
          <li><NavLink to="/waiter">New Order</NavLink></li>
          <li><NavLink to="/pendingOrder">Pending Orders</NavLink></li>
        </ul>
      </nav>
    </header>);
}

export default Header;