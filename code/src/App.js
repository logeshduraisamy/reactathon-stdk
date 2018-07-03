import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Apply from "./Apply";
import Applied from "./Applied";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
         <h1>Verizon Recruitment Portal</h1>
         <ul className="header">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/apply">Apply for a Job</NavLink></li>
           <li><NavLink to="/applied">Jobs Applied</NavLink></li>
         </ul>
         <div className="content">
           <Route exact path="/" component={Home}/>
           <Route path="/apply" component={Apply}/>
           <Route path="/applied" component={Applied}/>
         </div>
       </div>
       </HashRouter>
    );
  }
}

export default App;
