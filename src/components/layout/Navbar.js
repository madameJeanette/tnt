import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  const TEQPLAY_BLUE = "#23A3DD";
  // const state = {
  //   large: false
  // }
//  function toggleLarge() {
//     this.setState({
//       large: !this.state.large
//     });
//   };

  return (
    
        <nav>
            <div className="navWide">
          
            <Link to="/" >
            <div
              className="block large bounce"
              style={{
                fontSize: 50,
                color: TEQPLAY_BLUE,
                margin: "20px"
              }}
            >
              <i className="fa fa-teqplay" />
            </div>
                  
            </Link>
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
            {/* <i className="fa fa-teqplay"/> */}
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