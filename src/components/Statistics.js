import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const Statistics = ({ loading, error, items, onReload }) => {



    items.forEach(item => {

        item.day = new Date(item.date).toUTCString().split('2019', 1)[0]
        item.toDo = item.totalDoing
        item.done = item.totalDone
        item.review = item.totalReviewing
        item.testing = item.totalTesting
    });
    
    const data = [
        { name: 'Doing' , yesterday: items[0].totalDoing, today: items[1].totalDoing },
        { name: 'Done', yesterday: items[0].totalDone, today: items[1].totalDone },
        { name: 'Reviewing', yesterday: items[0].totalReviewing, today: items[1].totalTesting },
        { name: 'Testing', yesterday: items[0].totalTesting, today: items[1].totalReviewing },
    ];
    var dateToday = items[1].date
    var dateYesterday = items[0].date

    var today = dateToday

  
    return (
        <div className = 'barChart'>
            {/* BarChart is the output for my data from the api */}
        <BarChart width={450} height={350} data={items}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis stroke="#f9f9f9" dataKey="day" />
            <YAxis stroke="#f9f9f9"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="toDo" fill="#23a3dd" />
            <Bar dataKey="testing" fill="#ff9ff3" />
            <Bar dataKey="review" fill="#F16921" />
            <Bar dataKey="done" fill="#009432" />
        </BarChart>
{/*             
            <BarChart width={600} height={300} data={items}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>

            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey={items[1].date} fill="#8884d8" />
            <Bar dataKey={items[0].date} fill="#82ca9d" />
        </BarChart> */}
        </div>


    )
}

export default  Statistics
