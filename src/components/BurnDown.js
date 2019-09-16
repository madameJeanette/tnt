import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const BASE_URL = "https://jsonplaceholder.typicode.com/comments"
const data = [
  {
    name: 'Day 1', Scrumpoints: 200, Trend: 200, 
  },
  {
    name: '2', Scrumpoints: 178, Trend: 185,
  },
  {
    name: '3', Scrumpoints: 145, Trend: 170,
  },
  {
    name: '4', Scrumpoints: 132, Trend: 155,
  },
  {
    name: '5', Scrumpoints: 100, Trend: 140,
  },
  {
    name: '6', Scrumpoints: 99, Trend: 125,
  },
  {
    name: '7', Scrumpoints: 78, Trend: 110,
  },
  {
    name: '8', Scrumpoints: 49, Trend: 95,
  },
  {
    name: '9', Scrumpoints: 40, Trend: 78,
  },
  {
    name: '10', Scrumpoints: 34, Trend: 63,
  },
  {
    name: '11', Scrumpoints: 34, Trend: 45,
  },
  {
    name: '12', Scrumpoints: 19, Trend: 30,
  },
  {
    name: '13', Scrumpoints: 13, Trend: 15,
  },
  {
    name: '14', Scrumpoints: 0, Trend: 0
  }
  
];

function BurnDown() {
  componentDidMount()
    return (
      <div style={lineChartStyle}>
         <h3 >Burndown Scrumpoints</h3>
      
      <LineChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Scrumpoints" stroke="#32f3c9" activeDot={{ r: 3 }} />  
        <Line type="monotone" dataKey="Trend" stroke="#a97afb" />
        
      </LineChart>
      </div>
    );
  }

  function componentDidMount() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(comment => {
      console.log(comment);
    });
  }

  const lineChartStyle = {
    float: 'left'
  }

export default BurnDown

