import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import BurnDown from '../BurnDown';

export const fetchDonePoints = (dates) => {  //fetch with dates

  return {
    method: 'GET',
    endpoint: 'board/qDAFPals/burndownchartinfo/?startDate=' +    //get startDate from dates
    dates.startDate.toISOString().split('T', 1)[0] +      //set to ISO and split time
          '&endDate=' + 
          dates.endDate.toISOString().split('T', 1)[0],    //get endDate from dates
    headers: {"Authorization": "Basic " + btoa("test:test")}
  }
}

export const BurnDownContainer = (startDate) => {

  const { loading, payload, error, query} = useSuspenseQuery(fetchDonePoints(startDate)); 

  return (
    <div>
      <BurnDown loading={loading} error={error} items={payload} onReload={query}/>  
   
    </div>
   
  );
};

export default BurnDownContainer;


//query data and send to BurnDown
