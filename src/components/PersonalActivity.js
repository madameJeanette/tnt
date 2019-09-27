import React from 'react'

const PersonalActivity = ({ items }) => {

    // items.items.forEach(item => {
    //  item.
      console.log(items)
    // });
    return (
    <div>
            {
                items.map((member) => {
                    console.log(member)
                })
    }
            
    </div>
    )
}

export default PersonalActivity