import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const BurnDown = ({ items }) => {
  
  items.items.forEach(item => {
    
    item.ScrumPoints = item.totalDonePoint;
    item.BurnDownPoints = item.totalPoint - item.totalDonePoint;
    item.readableDate = new Date(item.date).toUTCString().split('2019', 1)[0];
    
  });
  
    // pass in data from BurnDownContainer
   
  return ( 
    
      //  linechart build
    <div className = 'burnDown'> 
            
     <LineChart
      width={800}
      height={600}
      data= {items.items} //pass in data items from burndowncontainer
      margin={{
        top: 20, right: 50, left: 20, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke='#f9f9f9f9' />
      <XAxis dataKey= 'readableDate' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="BurnDownPoints" stroke="rgb(241,105,33)" activeDot={{ r: 3 }} />
      <Line type="monotone" dataKey="ScrumPoints" stroke="#21a2dc" activeDot={{ r: 3 }} /> 
    
      {/* Use data key from items */}    
    </LineChart>
    </div>
   );
}
export default BurnDown;
