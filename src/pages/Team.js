import React from 'react';
import BurnDownContainer from '../components/donePoints/BurnDownContainer';

function Team() {
    return (
      <div className="Team"> 
      {/* Pass in data for container component. */}
        <BurnDownContainer /> 
      </div>
    );
  
  }
  
  export default Team;
  