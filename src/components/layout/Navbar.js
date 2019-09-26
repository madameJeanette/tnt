import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom"
import Home from "../../pages/Personal";
import Leaderboard from "../../pages/Leaderboard";
import Team from "../../pages/Team";
import DailyStandUp from '../../pages/DailyStandUp'
import Settings from "../../pages/Settings";


function Navbar() {

    return (
        <HashRouter basename="/">
        <div className="nav">
            <div className="navNarrow">
                <i onClick={burgerToggle} className="fa fa-bars" style={navStyle}/>
                <div className="narrowLinks">
                    <Link to="/Personal" style={linkStyle}> Personal </Link>
                    <Link to="/Team" style={linkStyle}> Team</Link>
                    <Link to="/DailyStandUp" style={linkStyle}> StandUp </Link>
                    <Link to="/Leaderboard" style={linkStyle}> Leaderboard </Link>
                    <Link to="/Settings" style={linkStyle}> Settings </Link>
                </div>
            </div>

            <div className="navWide">
                <div style={navStyle}>
                  
                    <Link to="/" onClick={burgerToggle} style={linkStyle}> Personal </Link>
                    |
                    <Link to="/Team" onClick={burgerToggle} style={linkStyle}> Team </Link>
                    |
                    <Link to="/DailyStandUp" onClick={burgerToggle} style={linkStyle}> StandUp </Link>
                    |
                    <Link to="/Leaderboard" onClick={burgerToggle} style={linkStyle}> Leaderboard </Link>
                    |
                    <Link to="/Settings" onClick={burgerToggle} style={linkStyle}> Settings </Link>              

                </div>
                <div className="blueRect" style={BlueRect}>
                <Link to="/" onClick={burgerToggle} ><img src='https://teqplay.nl/wp-content/uploads/2019/04/teqplay-icon-logo-white-300x227.png' style={linkStyleImg}  /></Link>
                </div>
            </div>
        </div>
        <Route exact path="/" component={Home}/>
                    <Route path="/Leaderboard" component={Leaderboard}/>
                    <Route path="/Team" component={Team}/>
                    <Route path="/DailyStandUp" component={DailyStandUp}/>
                    <Route exact path="/Settings" component={Settings}/>  

        </HashRouter>

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

const BlueRect = {
    height: '50px',
    width: '100%',
    backgroundColor: '#21A2DC'
}

const navStyle = {
    backgroundColor: '#f9f9f9',
    color: '#6f7982',
    padding: '20px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',

}

const linkStyle = {
    color: '#6f7982',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '10px'

}

const linkStyleImg = {
        color: '#6f7982',
        textDecoration: 'none',
        float: 'left',
        width: '4.5em',
        height: 'auto',
        
}


export default Navbar;