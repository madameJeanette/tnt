import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Team from '../../pages/Team';
import Leaderboard from '../../pages/Leaderboard';
import Home from '../../pages/Home'



function Navbar() {
    
    return (
    <Router>
       <div  className="navNarrow">
           <i onClick={burgerToggle} className="fa fa-bars" style={navStyle}></i>
            <div className="narrowLinks">
          
              <Link to="/"  style={linkStyle}>Home </Link>

              <Link to="/Team" style={linkStyle}> Team</Link>
               
              <Link to="/Leaderboard" style={linkStyle}> Leaderboard </Link>  
            </div>
        </div>       

        <div className="navWide">
            <div style={navStyle}>
               <Link to="/" onClick={burgerToggle} style={linkStyleImg}>logo foto</Link>
            
                <Link to="/" onClick={burgerToggle} style={linkStyle} >Home </Link>
               |   
                <Link to ="/Team" onClick={burgerToggle} style={linkStyle}> Team</Link>
               |
                <Link to="/Leaderboard" onClick={burgerToggle} style={linkStyle}> Leaderboard </Link>  
                </div>
             
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Leaderboard" component={Leaderboard} />
                    <Route path="/Team" component={Team} />
                </Switch>
            
        </div>
    </Router>

        
    )
}

 function burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
              linksEl.style.display = 'none';   //toggle the drop-down based on its current CSS display value
          } else {
              linksEl.style.display = 'block';
          }
  }
  
const navStyle = {
    backgroundColor: '#f9f9f9',
    color:'#6f7982',
    padding: '20px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
    
}

const linkStyle = {
    color:'#6f7982',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '10px'
    
}

const linkStyleImg = {
    color:'#6f7982',
    textDecoration: 'none',
    float: 'left'
}



export default Navbar;