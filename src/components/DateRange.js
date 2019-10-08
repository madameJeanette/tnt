import React, {useState} from "react";
import DatePicker from "react-datepicker";
import BurnDownContainer from './burnDown/BurnDownContainer'; 
import "react-datepicker/dist/react-datepicker.css";

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

function calculateCurrentSprintStart(today, startSprint) {
    const endSprint = startSprint.addDays(14);
    if (today > endSprint) {
        return calculateCurrentSprintStart(today, endSprint)
    } else {
        return startSprint
    }
}

export function DateRange() {
    const startSprint = new Date(Date.UTC(2019, 8, 23, 0, 0, 0)); //eertste sprint
    const today = new Date();
    const realStartSprint = calculateCurrentSprintStart(today, startSprint);

    const [startDateValue, setStartDate] = useState(realStartSprint);
    const isMonday = date => {   //filter for only week days
        const day = date.getDay();

        return day === 1;
    };
    const endDate = realStartSprint.addDays(14);
    return (
        <div className="datePickerContent ">
            <DatePicker className="datePicker"
                        selected={startDateValue}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDateValue}
                        endDate={endDate}
                        filterDate={isMonday}
                        placeholderText="Select a Monday"

            />
            <div className='flex-container'>

                <BurnDownContainer
                    endDate={endDate}
                    startDate={startDateValue}
                    boardId="qDAFPals"
                    teamName="Nauti and Nice"
                />

                <BurnDownContainer
                    endDate={endDate}
                    startDate={startDateValue}
                    boardId="xfg9qoms"
                    teamName="Unsinkables"
                />
            </div>
        </div>
    );
}

export default DateRange