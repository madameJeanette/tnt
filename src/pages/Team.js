import React from 'react';
import BurnDownContainer from '../components/donePoints/BurnDownContainer';
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'

function Team() {
    return (
      <div className="Team"> 
        {/* Pass in data for container component. */}
        <DailyStandUpContainer />
        <BurnDownContainer /> 
      </div>
    );
  
  }
  
  export default Team;
  