import React, {useState} from "react";
import DatePicker from "react-datepicker";
import BurnDownContainer from './burnDown/BurnDownContainer'; 
import "react-datepicker/dist/react-datepicker.css";




Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function calculateCurrentSprintStart(today, startSprint) {
  var endSprint = startSprint.addDays(14)
  if (today > endSprint) {
    return calculateCurrentSprintStart(today, endSprint)
  } else {
    return startSprint
  }
}

export function DateRange() {
    var startSprint = new Date("2019/09/24");//eertste sprint
    var realStartSprint = calculateCurrentSprintStart(new Date(), startSprint);

    const [startDateValue, setStartDate] = useState(realStartSprint);
      const isTuesday = date => {   //filter for only week days
        const day = date.getDay();
      
        return day == 1;
      };
    const endDate = realStartSprint.addDays(14)
    return (
      <div>
        <DatePicker className="datePicker"
          selected={startDateValue}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDateValue}
          endDate={endDate}
          filterDate={isTuesday}
          placeholderText="Select a Tuesday"
        
        />
        <div className = 'flex-container'>
          <BurnDownContainer 
            endDate={endDate}
            startDate={startDateValue}
            boardId="qDAFPals"
          />

          <BurnDownContainer 
            endDate={endDate}
            startDate={startDateValue}
            boardId="xfg9qoms"
          />
        </div>
      </div>
    ); 
  }; 
 

  export default DateRange