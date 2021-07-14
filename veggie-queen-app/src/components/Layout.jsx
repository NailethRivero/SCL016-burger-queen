import React from 'react';
import Header from "./Header";
import '../App.css';

const Layout = ({ children }) => {
  return (<section >
    <Header />
    {children}
  </section>);
}

export default Layout;