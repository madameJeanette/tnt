import React from 'react'

export default function Card() {
    return (
        <div className='profileCard' style={profileCardStyle}>
           <h2>This is a profile card</h2> 
           <img src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png" alt= "Profile Card"></img>
           <h3>name</h3>
           <p>jobDesc</p>
           
        </div>
    )
}

const profileCardStyle = {
    color:'#000',
    textDecoration: 'none',
    float: 'left',
    padding: "30px",
    margin: "20px",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    maxWidth: '300px',
    textAlign: 'center',
    position: 'absolute',
    display: 'block',
    top: '110px',
    left: '220px',
    
}

