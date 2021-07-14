import React from "react";
/* import { NavLink } from "react-router-dom"; */
//import "../css/App.css";
import Waiter from "../components/logos/waiter";
import Kitchen from "../components/logos/kitchen";
import Logo from "../components/logos/logo";
//import './home.css';
import '../App.css';

const Home = () => {
  return (
    <div>
      <div className="form-container">
        <Logo className="VQlogo" />
        <form className="responsive">
          <div className="control">
            <Waiter />
            <p><a href="/waiter" className="homeBtn">Waiter</a></p>
          </div>
          <div className="control">
            <Kitchen />
            <p><a href="/kitchen" className="homeBtn">Chef</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;