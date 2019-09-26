import React from 'react'

const TeamList = ({ items }) => {

    // items.items.forEach(item => {
    //  item.
      console.log(items)
    // });
    return (
      <div>
        {
          items.map((member) =>
            <h4 key={member.id}>{member.fullName}</h4>
          )
        }
        </div>
    )
}

export default TeamList