import ContactsProducer from 'Pages/ContactsProducer/ContactsProducer';
import Home from 'Pages/Home/Home';
import OneProductPage from 'Pages/OneProductPage/OneProductPage';
import ProductsPage from 'Pages/ProductsPage/ProductsPage';
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

export const App = () => {
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
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route
            path="/products/:productId/*"
            element={<OneProductPage />}
          ></Route>
          <Route path="/contactProducer" element={<ContactsProducer />}></Route>
        </Routes>
      </main>
    </div>
  );
};
