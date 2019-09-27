import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {

    return (
        
        <nav>
            <div className="navNarrow">
                <i onClick={burgerToggle} className="fa fa-teqplay"/>
                <div className="narrowLinks">
                    <Link to="/Personal" className="linkStyle"> Personal </Link>
                    <Link to="/Team" className="linkStyle"> Team</Link>
                    <Link to="/DailyStandUp" className="linkStyle"> StandUp </Link>
                    <Link to="/Leaderboard" className="linkStyle"> Leaderboard </Link>
                    <Link to="/Settings" className="linkStyle"> Settings </Link>
                </div>
            </div>

            <div className="navWide">
               
                    <Link to="/" onClick={burgerToggle} ><i className="fa fa-teqplay" style={{ color: "#F16921", fontSize: 128 }} /></Link>
                    <Link to="/" onClick={burgerToggle} className="linkStyle"> Personal </Link>
                    |
                    <Link to="/Team" onClick={burgerToggle} className="linkStyle"> Team </Link>
                    |
                    <Link to="/DailyStandUp" onClick={burgerToggle} className="linkStyle"> StandUp </Link>
                    |
                    <Link to="/Leaderboard" onClick={burgerToggle} className="linkStyle"> Leaderboard </Link>
                    |
                    <Link to="/Settings" onClick={burgerToggle} className="linkStyle"> Settings </Link>              
                   
                   <hr></hr>
                </div>
           
           
                
                </nav>
        

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



export default Navbar;