import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import BurnDown from '../BurnDown';
import TotalCards from '../TotalCards';

export const fetchDonePoints = (data) => {  //fetch with dates
  var credentials = localStorage.getItem("uname") + ":" + localStorage.getItem("pw")
  return {
    method: 'GET',
    endpoint: 'board/' + data.boardId + '/burndownchartinfo/?startDate=' +    //get startDate from dates
    data.startDate.toISOString().split('T', 1)[0] +      //set to ISO and split time
          '&endDate=' + 
          data.endDate.toISOString().split('T', 1)[0],    //get endDate from dates
    headers: {"Authorization": "Basic " + btoa(credentials)}
  }
}

export const BurnDownContainer = (data) => {
  const { loading, payload, error, query} = useSuspenseQuery(fetchDonePoints(data));

  return (
  <div className = 'burnDownOne'>
    <BurnDown loading={loading} error={error} items={payload} onReload={query} teamName={data.teamName} highestHomeTick={data.highestHomeTick} setTick={data.setTick}/>  
    <TotalCards  loading={loading} error={error} items={payload} onReload={query} highestTickTC={data.highestTickTC} setTickTC={data.setTickTC} />
  </div>
   
  );
};

export default BurnDownContainer;


//query data and send to BurnDown
