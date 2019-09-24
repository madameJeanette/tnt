import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// // you will need the css that comes with bootstrap@3. if you are using
// // a tool like webpack, you can do the following:
// import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

const BurnDown = ({ loading, error, items, onReload }) => {
 
  items.items.forEach(item => {
    item.actualDonePoints = item.totalPoint - item.totalDonePoint;
    item.readableDate = new Date(item.date).toUTCString().split('2019', 1)[0];
   
  });
  
    // pass in data from BurnDownContainer
    // handleEvent();
  return ( 
    
      //  linechart build
    <div style={lineChartStyle}> 
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
    <DateRangePicker startDate="1/1/2019" endDate="3/1/2019" >
      <button>Click me to pick date!</button>
     </DateRangePicker>
       
    </div>
  
 );

}

// function handleEvent(onApply ,picker) {
//   console.log(picker.startDate);
//   console.log(picker.endDate);

//   return <DateRangePicker onApply={this.handleEvent} />;
// }

// linechart styling
const  lineChartStyle = {
  float: 'right',
  margin: '10'
 
}

export default BurnDown;