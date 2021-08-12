import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTES from "./routes";
import './App.css';
//Import various components
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

const App = ({ match }) => {
  return (
    <Router>
      <div className="App">
        <body>
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.ABOUT} component={About} />
              <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
              <Route path={ROUTES.CONTACT} component={Contact} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </div>
    </Router>
  );
}

export default App;
