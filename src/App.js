import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
// import {Route} from "react-router";
// import { HashRouter, Route, Link } from "react-router-dom";

// import Home from "./pages/Personal";
// import Leaderboard from "./pages/Leaderboard";
// import Team from "./pages/Team";
// import DailyStandUp from './pages/DailyStandUp'

// import {BrowserRouter as Router} from "react-router-dom";
// import Settings from "./pages/Settings";
import { ClientContextProvider } from 'react-fetching-library';
import { Client } from './components/apicalls/Client';


  //added fetching-library client to root.
  
 
function App() {
    return (
  
    <ClientContextProvider client={Client}> 
    <Suspense fallback={<span>Loading</span>}>
        <div className="App">
            {/* <Router>
               
                <Route exact path="/" component={Home}/>
                <Route path="/Leaderboard" component={Leaderboard}/>
                <Route path="/Team" component={Team}/>
                <Route path="/DailyStandUp" component={DailyStandUp}/>
                <Route exact path="/Settings" component={Settings}/>  
            </Router> */}
             <Navbar/>
        </div>
        </Suspense> 
        </ClientContextProvider>
    
        // Routing for nav
        //suspense lazy loading added 
        // Routing for github pages
    );
    
}
export default App
 
