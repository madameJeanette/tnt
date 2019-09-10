import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    
    return (
    <nav>
        <div  className="navNarrow">
           <i onClick={burgerToggle} className="fa fa-bars" style={navStyle}></i>
            <div className="narrowLinks">
          
              <a href="#" onClick={burgerToggle} style={linkStyle}>Home </a>

              <a href="#" onClick={burgerToggle} style={linkStyle}> Team</a>
               
              <a href="#" onClick={burgerToggle} style={linkStyle}> Leaderboard </a>  
               
             

            </div>
        </div>        

        <div className="navWide">
            <div style={navStyle}>
               <a href="#" onClick={burgerToggle} style={linkStyleImg}>logo foto</a>
            
                <a href="#" onClick={burgerToggle} style={linkStyle} >Home </a>
               |   
                <a href="#" onClick={burgerToggle} style={linkStyle}> Team</a>
             |
                <a href="#" onClick={burgerToggle} style={linkStyle}> Leaderboard </a>  
            
             
            </div>
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