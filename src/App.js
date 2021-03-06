import React, { Suspense } from 'react';

import { HashRouter, Route, Redirect } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import './sass/App.scss';
import { ClientContextProvider } from 'react-fetching-library';
import { Client } from './components/apicalls/Client';
import Home from "./pages/Personal";
import Leaderboard from "./pages/Leaderboard";
import Team from "./pages/Team";
import DailyStandUp from './pages/DailyStandUp'
import Settings from "./pages/Settings";
import LoginPage from './pages/LoginPage';
import { Message } from 'semantic-ui-react';
  //added fetching-library client to root.

var loggedIn = ''

  export function check() {  
    // get stored data from the localStorage 
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('pw');
   
    // check if stored data has a value if no data or data null return false 
    if(storedName != null && storedName !== "" && storedPw != null && storedPw !== "") {
      loggedIn = true
     alert("Succes!");
      return loggedIn
    }else {
      alert("No name or password provided");
     
      return false
    
    }
  }

  function CheckIfLoggedIn(loggedIn) { //if check() = loggedIn >returns true
    if (loggedIn) {
  
      return <Navbar/>   //geef de navbar weer
    } else {
  
      return <Redirect to="/Login"/>  //if false redirect naar Login pagina
    }
  }

  function App() {
   check()             //execute login check wile opening page
                        
    return (
      <ClientContextProvider client={Client}> 
       <Suspense fallback={ <div><i className="fa fa-teqplay fa-spin"/></div>}>
          {/* While loading display teqPlay loader */}
         <div className="App">
           <HashRouter basename="/"> 
           {/* When opening home page run CheckIfLoggedIn if loggedIn = true */}
              {CheckIfLoggedIn(loggedIn)}
              {loggedIn &&
                <div>
                  <Route exact path="/" component={Team}/>
                  {/* <Route path="/Leaderboard" component={Leaderboard}/> */}
                  <Route path="/Team" component={Team}/>
                  <Route path="/DailyStandUp" component={DailyStandUp}/>
                  <Route path="/Settings" component={Settings}/>
                </div>
              }
            <Route path="/Login" component={LoginPage}/>             
           </HashRouter>
         </div>
       </Suspense> 
     </ClientContextProvider>
  )
    
}
export default App
 
