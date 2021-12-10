import logo from './logo.svg';
import './App.css';
import Graph from "./pages/Graph"
import About from "./pages/About"
import Home from "./pages/Home"
import Nav from "./Nav"
import Footer from "./Footer"
import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/blog" component = {Graph} />
          <Route path = "/home" component = {About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
