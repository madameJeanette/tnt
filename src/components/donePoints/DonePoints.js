import React from 'react'



export const DonePoints = ({ loading, error, items, onReload }) => {
    
   
    // userId = {items.userId}
    // console.log(userId)
  
    console.log(items)
    return (
            <div> 
              
              <ul>{JSON.stringify(items)}</ul>
          

            </div>
            
          )
}   

export default DonePoints