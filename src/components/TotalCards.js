import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const TotalCards = ({ items }) => {
  
  items.items.forEach(item => {
    item.TotalCards = item.totalItems
    item.readableDate = new Date(item.date).toUTCString().split('2019', 1)[0];
    
  });
  
    // pass in data from BurnDownContainer
   
  return ( 
   
      //  linechart build
    <div>  
     <h1>Total cards </h1>    
   <ResponsiveContainer width= "100%" height= {725}>
     <LineChart 
      data= {items.items} //pass in data items from burndowncontainer
      margin={{
        top: 20, right: 50, left: 20, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3 " />
      <XAxis dataKey= 'readableDate' stroke="#f9f9f9" />
      <YAxis stroke="#f9f9f9"/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="TotalCards" stroke="#ff9ff3" activeDot={{ r: 3 }} /> 
      {/* Use data key from items */}    
    </LineChart>
    </ResponsiveContainer>
    </div>
   );
}
export default TotalCards;
