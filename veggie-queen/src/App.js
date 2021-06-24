/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Chef from "../components/Chef";
import ChefOrder from "../components/ChefOrder";
import WaiterOrder from "../components/WaiterOrder";
import Layout from "../components/Layout";
/* import NotFound from "../components/NotFound"; */
import "../scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/chef" component={Chef} />
          <Route path="/chefOrder" component={ChefOrder} />
        <Layout >
          <Route path="/waiter" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/waiterOrder" component={WaiterOrder} />
        </Layout>
       {/*  <Route path="/notfound" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;