import React from 'react';
import { useSuspenseQuery } from 'react-fetching-library';
import Team from '../TeamStandUp';

export const fetchTeamStandUp = (props) => { 
  var credentials = localStorage.getItem("uname") + ":" + localStorage.getItem("pw")
    return {
        method: 'GET',
        endpoint: 'board/'+props.boardId+'?key=62f0297bf821e374ae28a1fbab5ef9fb&token=dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5',   //get all mebers
        headers: {"Authorization": "Basic " + btoa(credentials)},
        key: "62f0297bf821e374ae28a1fbab5ef9fb",
        token: "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    
    }
}

export const TeamContainer = (props) => {

  const { loading, payload, error, query} = useSuspenseQuery(fetchTeamStandUp(props)); 
    console.log(props.boardId)
  return (
    <div>
          <Team loading={loading} error={error} items={payload} onReload={query} boardId={props.boardId} boardName={props.boardName}/>
    </div>
   
  );
};

export default TeamContainer;