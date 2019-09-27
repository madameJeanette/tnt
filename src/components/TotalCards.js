import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const TotalCards = ({ items }) => {
  
  items.items.forEach(item => {
    item.TotalCards = item.totalItems
    item.readableDate = new Date(item.date).toUTCString().split('2019', 1)[0];
    
  });
  
    // pass in data from BurnDownContainer
   
  return ( 
   
      //  linechart build
    <div className = 'totalCards'>  
     <h1>Total cards added </h1>    
     <LineChart 
      width={900}
      height={700}
      data= {items.items} //pass in data items from burndowncontainer
      margin={{
        top: 20, right: 50, left: 20, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3 " />
      <XAxis dataKey= 'readableDate' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="TotalCards" stroke="rgb(241,105,33)" activeDot={{ r: 3 }} /> 
      {/* Use data key from items */}    
    </LineChart>
    </div>
   );
}
export default TotalCards;
