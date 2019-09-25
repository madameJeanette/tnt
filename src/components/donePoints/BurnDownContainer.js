import React, {useState} from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import BurnDown from '../BurnDown';
export const fetchDonePoints = (dates) => {  

  return {
    method: 'GET',
    endpoint: 'board/qDAFPals/burndownchartinfo/?startDate=' + 
    dates.startDate.toISOString().split('T', 1)[0] +
          '&endDate=' + 
          dates.endDate.toISOString().split('T', 1)[0],
    headers: {"Authorization": "Basic " + btoa("test:test")}
  }
}

export const BurnDownContainer = (startDate) => {
  console.log(fetchDonePoints(startDate))
  const { loading, payload, error, query} = useSuspenseQuery(fetchDonePoints(startDate)); 
 
  console.log(payload);
  return (
    <div>
      <BurnDown loading={loading} error={error} items={payload} onReload={query}/>
     
    </div>
    
  );

};

export default BurnDownContainer;


//query data and send to BurnDown
