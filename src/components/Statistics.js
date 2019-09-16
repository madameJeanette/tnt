import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
    {name: 'Todo', move: 0, add: 5},
    {name: 'Completed', move: 10, add: 3},
    {name: 'Gandalf', move: 3, add: 6},
    {name: 'Testing', move: 7, add: 9},
];
function Statistics() {
    return (
        <BarChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
   <CartesianGrid strokeDasharray="3 3"/>
   <XAxis dataKey="name"/>
   <YAxis/>
   <Tooltip/>
   <Legend />
   <Bar dataKey="move" fill="#8884d8" />
   <Bar dataKey="add" fill="#82ca9d" />
  </BarChart>

    )
}

export default  Statistics