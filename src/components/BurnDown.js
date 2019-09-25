import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const BurnDown = ({ loading, error, items, onReload }) => {

  items.items.forEach(item => {
    item.actualDonePoints = item.totalPoint - item.totalDonePoint;
    item.readableDate = new Date(item.date).toUTCString().split('2019', 1)[0];
    console.log(item.readableDate)
  });
  
    // pass in data from BurnDownContainer
   
  return ( 
    
      //  linechart build
    <div> 
       <h3 >Burndown tasks</h3>
     
     <LineChart
      width={700}
      height={400}
      data= {items.items} //pass in data items from burndowncontainer
      margin={{
        top: 20, right: 50, left: 20, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey= 'readableDate' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="actualDonePoints" stroke="#32f3c9" activeDot={{ r: 3 }} /> 
      {/* Use data key from items */}    
    </LineChart>
    </div>
  
 );

}



export default BurnDown;
