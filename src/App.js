import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Code from "@material-ui/icons/CodeOutlined"
import CompareArrows from "@material-ui/icons/CompareArrowsOutlined"
import Person from "@material-ui/icons/PersonOutline"
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="title">
            <h2>Carlos Gumucio Labbé</h2>
          </div>
          <div className="viewSwitcher">
              <div className="cvIcon">
                <Link to="/cv">
                  <CompareArrows />
                </Link>
                

              </div>
              <div className="portfolioIcon">
                <Link to="/portfolio">
                  <Code />
                </Link>
                

              </div>
              <div className="avatarIcon">
              <Link to="/about">
                  <Person />
              </Link>
              </div>

            </div>


          
        </div>
        <Switch>
            <Route path="/cv">
              <Resume/>
            </Route>
            <Route path="/">
              <Portfolio/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
           
          </Switch>
      </div>
    </Router>

  );
}

export default App;
