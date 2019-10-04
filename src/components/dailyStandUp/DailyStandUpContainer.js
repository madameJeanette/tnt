import React from 'react';

import { useSuspenseQuery } from 'react-fetching-library';
import Statistics from '../Statistics';



export const fetchDailyStandUp = (props) => {
  var day = new Date()
  var today = day.toISOString().split('T', 1)[0]
  var credentials = localStorage.getItem("uname") + ":" + localStorage.getItem("pw")
  return {
    method: 'GET',
    endpoint: 'board/' + props.boardId + '/teamstatistics/?today=' + today,
    headers:
      { "Authorization": "Basic " + btoa(credentials) },
    // parameters:
    // {
    //     "key": "62f0297bf821e374ae28a1fbab5ef9fb",
    //     "token": "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    // }
  }
}

export const DailyStandUpContainer = (props) => {
  const { loading, payload, error, query} = useSuspenseQuery(fetchDailyStandUp(props));
 
  // console.log(loading, payload, error, query);
  return <Statistics loading={loading} error={error} items={payload} onReload={query}/>;

};

export default DailyStandUpContainer;
