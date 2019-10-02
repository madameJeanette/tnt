import React from 'react'

const TeamList = ({ items }) => {

    
    
    //console.log(items)
    
    return (
      <div className="teamList">
        {
          items.map((member) =>
            <h4 key={member.id}>{member.fullName}</h4>
          )
        }
        </div>
    )
}

export default TeamList