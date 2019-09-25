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
    const [endDateValue] = useState(new Date().addDays(14));
      const isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
      };
    return (
      <>
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
          
      </>
    );
  
  }; 

  export default DateRange