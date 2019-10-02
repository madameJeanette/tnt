import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import PersonalActivity from '../PersonalActivity';

export const fetchMemberActivity = () => { 

    return {
        method: 'GET',
        endpoint: 'member/5a5c862d056d49a6d1370ad7/actions?key=62f0297bf821e374ae28a1fbab5ef9fb&token=dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5',   //get all mebers
        headers: {"Authorization": "Basic " + btoa("user:test")},
        key: "62f0297bf821e374ae28a1fbab5ef9fb",
        token: "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    
    }
}

export const PersonalActivityContainer = () => {

  const { loading, payload, error, query} = useSuspenseQuery(fetchMemberActivity()); 
    //console.log(payload)
  return (
    <div>
      <PersonalActivity loading={loading} error={error} items={payload} onReload={query}/>  
    </div>
   
  );
};

export default PersonalActivityContainer;


//query data and send to TeamList
