import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const BurnDown = ({ items, teamName,  highestHomeTick, setTick }) => {
  if (items.items != null) {
  var ticks = [];
  let highestTicks = 0;

  items.items.forEach(item => {
    
    item.ScrumPoints = item.totalDonePoint;
    item.BurnDownPoints = item.totalPoint - item.totalDonePoint;
    item.readableDate = new Date(item.date).toUTCString().split('2019', 1)[0];
    
    const burndownpoints = item.BurnDownPoints
      if (highestTicks < burndownpoints) {
        highestTicks = burndownpoints;
         }  
    if (highestHomeTick < highestTicks) {
      setTick(highestTicks);
    }
   
    let latestAddedTick = 0;

    // //Set the ticks array with steps of 50
    while (highestHomeTick > latestAddedTick) {
        ticks.push(latestAddedTick);
        latestAddedTick += 50;
    }
});
   
  }  else {
    return (<div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
      </div>);
  }
  
  return ( 
    
      //  linechart build
    <div> 
      <h1>{teamName}</h1>

    <ResponsiveContainer width= '100%' height= {750}>
     <LineChart 
      data= {items.items} //pass in data items from burndowncontainer
      margin={{
        top: 20, right: 50, left: 20, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey= 'readableDate' stroke="#f9f9f9" />
      <YAxis stroke="#f9f9f9" ticks={ticks} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="BurnDownPoints" stroke="#F16921" activeDot={{ r: 3 }} />
      <Line type="monotone" dataKey="ScrumPoints" stroke="#21a2dc" activeDot={{ r: 3 }} /> 
      {/* Use data key from items */}    
    </LineChart>
    </ResponsiveContainer>
    </div>
   );
}
export default BurnDown;
