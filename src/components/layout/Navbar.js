import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  const TEQPLAY_BLUE = "#23A3DD";

  return (
          <nav>
            <div className="navWide">
            <Link to="/Team" >
              <div
                style={{
                  fontSize: 45,
                  color: TEQPLAY_BLUE,
                  padding: "10px"
                }}
              >
                <i className="fa fa-teqplay fa-spin" />
              </div>
                  
            </Link>
            {/* <Link to="/" className="linkStyle"> Personal </Link> */}
            {/* | */}
            <Link to="/Team" className="linkStyle"> Team </Link>
            |
            <Link to="/DailyStandUp" className="linkStyle"> StandUp </Link>
            |
            <Link to="/Leaderboard" className="linkStyle"> Leaderboard </Link>
            |
            <Link to="/Settings" className="linkStyle"> Settings </Link>              
                  
            <hr></hr>
          </div>
    
{/* 
          <div className="navNarrow">
            <i className="fa fa-teqplay"  style={{
                fontSize: 10,
                color: TEQPLAY_BLUE,
                margin: "5px"
              }}/>
            <div className="narrowLinks">
              <Link to="/Personal" className="linkStyle"> Personal </Link>
              <Link to="/Team" className="linkStyle"> Team</Link>
              <Link to="/DailyStandUp" className="linkStyle"> StandUp </Link>
              <Link to="/Leaderboard" className="linkStyle"> Leaderboard </Link>
              <Link to="/Settings" className="linkStyle"> Settings </Link>
            </div>
          </div>   */}
        </nav>
    )
}



export default Navbar;