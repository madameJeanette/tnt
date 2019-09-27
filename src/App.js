import React, { Suspense } from 'react';

import { HashRouter, Route } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import './sass/App.scss';
import { ClientContextProvider } from 'react-fetching-library';
import { Client } from './components/apicalls/Client';
import Home from "./pages/Personal";
import Leaderboard from "./pages/Leaderboard";
import Team from "./pages/Team";
import DailyStandUp from './pages/DailyStandUp'
import Settings from "./pages/Settings";


  //added fetching-library client to root.
  
 
function App() {
    return (
  
    <ClientContextProvider client={Client}> 
      <Suspense fallback={<div className="lds-roller" />}>
        <div className="App">
          <HashRouter basename="/">
            <Navbar/>
            
            <Route exact path="/" component={Home}/>
            <Route path="/Leaderboard" component={Leaderboard}/>
            <Route path="/Team" component={Team}/>
            <Route path="/DailyStandUp" component={DailyStandUp}/>
            <Route exact path="/Settings" component={Settings}/>
          </HashRouter>
        </div>
      </Suspense> 
    </ClientContextProvider>
    
        //suspense lazy loading added 
        // Routing for github pages moved to navbar
    );
    
}
export default App
 
