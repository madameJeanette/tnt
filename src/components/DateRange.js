import React, {useState} from "react";
import DatePicker from "react-datepicker";
import BurnDownContainer from '../components/donePoints/BurnDownContainer'; 
import "react-datepicker/dist/react-datepicker.css";

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export function DateRange() {

    const [startDateValue, setStartDate] = useState(new Date());
    const [endDateValue] = useState(new Date().addDays(14));  //add 14 days as endDate
      const isWeekday = date => {   //filter for only week days
        const day = date.getDay();
        return day !== 0 && day !== 6;
      };
    return (
      <div style={lineChartStyle}>
        <DatePicker
          selected={startDateValue}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDateValue}
          endDate={endDateValue}
          filterDate={isWeekday}
          placeholderText="Select a weekday"
        />
        <BurnDownContainer 
          endDate={endDateValue}
          startDate={startDateValue}
        />
      </div>
    ); 
  }; 
  const  lineChartStyle = {
    float: 'right',
    margin: '10'
  }

  export default DateRange