import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {

    return (
        
        <nav>
            <div className="navWide">
               
                    <Link to="/" ><i className="fa fa-teqplay" style={{ color: "#F16921", fontSize: 128 }} /></Link>
                    <Link to="/" className="linkStyle"> Personal </Link>
                    |
                    <Link to="/Team" className="linkStyle"> Team </Link>
                    |
                    <Link to="/DailyStandUp" className="linkStyle"> StandUp </Link>
                    |
                    <Link to="/Leaderboard" className="linkStyle"> Leaderboard </Link>
                    |
                    <Link to="/Settings" className="linkStyle"> Settings </Link>              
                   
                   <hr></hr>
                </div>

                <div className="navNarrow">
                  <i className="fa fa-teqplay"/>
                  <div className="narrowLinks">
                    <Link to="/Personal" className="linkStyle"> Personal </Link>
                    <Link to="/Team" className="linkStyle"> Team</Link>
                    <Link to="/DailyStandUp" className="linkStyle"> StandUp </Link>
                    <Link to="/Leaderboard" className="linkStyle"> Leaderboard </Link>
                    <Link to="/Settings" className="linkStyle"> Settings </Link>
                  </div>
                 </div>  
        </nav>
    )
}


export default Navbar;