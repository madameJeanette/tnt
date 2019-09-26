import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import TeamList from '../TeamList';

export const fetchMembers = () => { 

    return {
        method: 'GET',
        endpoint: 'board/qDAFPals/members?key=62f0297bf821e374ae28a1fbab5ef9fb&token=dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5',   //get all mebers
        headers: {"Authorization": "Basic " + btoa("test:test")},
        key: "62f0297bf821e374ae28a1fbab5ef9fb",
        token: "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    
    }
}

export const TeamListContainer = () => {

  const { loading, payload, error, query} = useSuspenseQuery(fetchMembers()); 

  return (
    <div>
      <TeamList loading={loading} error={error} items={payload} onReload={query}/>  
    </div>
   
  );
};

export default TeamListContainer;


//query data and send to TeamList
