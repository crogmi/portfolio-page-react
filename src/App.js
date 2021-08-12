import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTES from "./routes";
import './App.css';
//Import various components
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

const App = ({ match }) => {
  return (
    <Router>
      <div className="App">
        <body>
          <header>
            <Navbar />
          </header>
          <main>
            <Home />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer>
          </footer>
        </body>
      </div>
    </Router>
  );
}

export default App;
