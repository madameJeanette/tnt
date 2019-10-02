import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import BurnDown from '../BurnDown';
import TotalCards from '../TotalCards';

export const fetchDonePoints = (data) => {  //fetch with dates
  console.log(data.boardId)
  return {
    method: 'GET',
    endpoint: 'board/' + data.boardId + '/burndownchartinfo/?startDate=' +    //get startDate from dates
    data.startDate.toISOString().split('T', 1)[0] +      //set to ISO and split time
          '&endDate=' + 
          data.endDate.toISOString().split('T', 1)[0],    //get endDate from dates
    headers: {"Authorization": "Basic " + btoa("test:test")}
  }
}

export const BurnDownContainer = (data) => {
  const { loading, payload, error, query} = useSuspenseQuery(fetchDonePoints(data)); 

  return (
  <div className = 'burnDownOne'>
    <BurnDown loading={loading} error={error} items={payload} onReload={query}/>  
    <TotalCards  loading={loading} error={error} items={payload} onReload={query}/>
  </div>
   
  );
};

export default BurnDownContainer;


//query data and send to BurnDown
