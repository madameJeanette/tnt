import React from 'react';
import BurnDownContainer from '../components/donePoints/BurnDownContainer';
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'
import DailyCardContainer from '../components/dailyStandUp/DailyCardContainer'

function Team() {
    return (
      <div className="Team"> 
        {/* Pass in data for container component. */}
        <DailyStandUpContainer />
        <DailyCardContainer />
        <BurnDownContainer /> 
      </div>
    );
  
  }
  
  export default Team;
  