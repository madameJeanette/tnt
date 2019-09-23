import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import StatsApi from './apicalls/StatsApi';
//import StatisticsApi from './apicalls/StatisticsApi'


const data = [
    { name: 'testing', this_week: 0, last_week: 5 },
    { name: 'Completed', this_week: 10, last_week: 3 },
    { name: 'Gandalf', this_week: 3, last_week: 6 },
    { name: 'Testing', this_week: 7, last_week: 9},
];
function Statistics() {
    return (
        <div>
            <StatsApi />
            {/* <StatisticsApi /> */}

        <BarChart width={600} height={300} data={data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>

            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="this_week" fill="#8884d8" />
            <Bar dataKey="last_week" fill="#82ca9d" />
        </BarChart>
        </div>


    )
}

export default  Statistics
