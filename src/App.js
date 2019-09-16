import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import {Route} from "react-router";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Team from "./pages/Team";
import {BrowserRouter as Router} from "react-router-dom";
import Settings from "./pages/Settings";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/Leaderboard" component={Leaderboard}/>
                <Route path="/Team" component={Team}/>
                <Route exact path="/Settings" component={Settings}/>
            </Router>
        </div>
    );

}

export default App;
