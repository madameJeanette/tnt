import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const BurnDown = ({ loading, error, items, onReload }) => {

  items.items.forEach(item => {
    item.actualDonePoints = item.totalPoint - item.totalDonePoint
  });

    // pass in data from BurnDownContainer
console.log(items)
  return ( 
      //  linechart build
    <div style={lineChartStyle}> 
       <h3 >Burndown Done Points</h3>
     
     <LineChart
      width={1000}
      height={500}
      data= {items.items} //pass in data items from burndowncontainer
      margin={{
        top: 20, right: 50, left: 20, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="actualDonePoints" stroke="#32f3c9" activeDot={{ r: 3 }} /> 
      {/* Use data key from items */}
     
     
    </LineChart>
     
    </div>
 );
}
// linechart styling
const  lineChartStyle = {
  float: 'right',
  margin: '10'
}

export default BurnDown;