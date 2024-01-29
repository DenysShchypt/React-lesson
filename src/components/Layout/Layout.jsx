import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/products">
          Market
        </NavLink>
        <NavLink className="header-link" to="/contactProducer">
          Contacts Producer
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
