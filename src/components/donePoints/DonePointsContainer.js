import React from 'react';
// import { useQuery } from 'react-fetching-library';
import {fetchDonePoints} from '../apicalls/actions/fetchDonePoints'
import DonePoints from './DonePoints'
import { useSuspenseQuery } from 'react-fetching-library';


export const DonePointsContainer = () => {
  const { loading, payload, error, query} = useSuspenseQuery(fetchDonePoints);
 
  // console.log(loading, payload, error, query);
  return <DonePoints loading={loading} error={error} items={payload} onReload={query}/>;

};

export default DonePointsContainer;

