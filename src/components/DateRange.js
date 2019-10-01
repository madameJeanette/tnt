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
    /*var currentDay = new Date().toUTCString().split('T', 1)[0]; //vandaag
    var nextSprint = new Date().toUTCString().split('T', 1)[0]; //addWeeks(new Date(startSprint), 2); //start sprint 2
    console.log(startSprint);
    console.log(currentDay);
    // console.log(TwoWeeksFromNow);
    console.log(nextSprint);
  
    if(currentDay > nextSprint){  //als datum van vandaag gelijk is aan datum volgende sprint
      console.log("Ik werk woohoo!");
      startSprint = currentDay; // startSprint word datum van vandaag
      var TwoWeeksFromNow = addWeeks(new Date(currentDay), 2);
      console.log(TwoWeeksFromNow);  //vandaag over twee weken
      nextSprint = TwoWeeksFromNow; //tel twee weken bij nextSprint op
      console.log(startSprint);
      console.log(nextSprint);
   }*/

    const [startDateValue, setStartDate] = useState(realStartSprint);
    //  const [endDateValue, setEndDate] = useState(new Date().addDays(14)); 
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