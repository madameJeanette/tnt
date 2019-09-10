import React from 'react';

export default function Navbar() {
    
    return (
        <nav style={hdrStyle}>
            <a style={linkStyleImg} to="/">logo foto</a>
            
            <a style={linkStyle} to="/">Home </a>
             |
            <a style={linkStyle} to="/leaderboard"> Leaderboard </a>  
            | 
            <a style={linkStyle} to="/about"> About</a>
        </nav>
    )
}

const hdrStyle = {
    backgroundColor: '#f9f9f9',
    color:'#6f7982',
    padding: '20px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
    
}

const linkStyle = {
    color:'#6f7982',
    textDecoration: 'none',
    textAlign: 'center'
}

const linkStyleImg = {
    color:'#6f7982',
    textDecoration: 'none',
    float: 'left'
}
