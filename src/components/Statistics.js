import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const Statistics = ({ loading, error, items, onReload }) => {


    // information what i got from the API,
    // boardId: "qDAFPals"
    // date: 1568937600000
    // today: 1568937600000
    // totalDoing: 58
    // totalDone: 45
    // totalReviewing: 14
    // totalTesting: 25

    items.forEach(item => {
    console.log(    item.day = item.date,
        item.toDo = item.totalDoing,
        item.done = item.totalDone,
        item.review = item.totalReviewing,
        item.testing = item.totalTesting)
    });
  
    const data = [
        { name: 'Doing' , yesterday: items[0].totalDoing, today: items[1].totalDoing },
        { name: 'Done', yesterday: items[0].totalDone, today: items[1].totalDone },
        { name: 'Reviewing', yesterday: items[0].totalReviewing, today: items[1].totalTesting },
        { name: 'Testing', yesterday: items[0].totalTesting, today: items[1].totalReviewing },
    ];
    

  console.log(items)
    return (
        <div>
            {/* BarChart is the output for my data from the api */}
        <BarChart width={600} height={300} data={data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>

            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey='today' fill="#8884d8" />
            <Bar dataKey='yesterday' fill="#82ca9d" />
        </BarChart>
        </div>


    )
}

export default  Statistics
