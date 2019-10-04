import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import DailyStandUpCards from '../DailyStandUpCards';

//Fetch daily Cards that are new



const fetchDailyCards = (props) => {
  var credentials = localStorage.getItem("uname") + ":" + localStorage.getItem("pw")
  return {
    method: 'GET',
    endpoint: '/board/' + props.boardId + '/newCards',
    headers:
      { "Authorization": "Basic " + btoa(credentials) }
    // parameters:
    // {
    //     "key": "62f0297bf821e374ae28a1fbab5ef9fb",
    //     "token": "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    // }
  }}


export const DailyStandUpContainer = (props) => {
    const { loading, payload, error, query} = useSuspenseQuery(fetchDailyCards(props));
 
  // console.log(loading, payload, error, query);
    return ( <div>
        
        <DailyStandUpCards loading={loading} error={error} items={payload} onReload={query} />
        </div>
        )
    
};

export default DailyStandUpContainer;
