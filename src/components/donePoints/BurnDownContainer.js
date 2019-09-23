import React from 'react';
// Data container for burndown
import {fetchDonePoints} from '../apicalls/actions/fetchDonePoints'
import { useSuspenseQuery } from 'react-fetching-library';
import BurnDown from '../BurnDown';


export const BurnDownContainer = () => {
  const { loading, payload, error, query} = useSuspenseQuery(fetchDonePoints);
 
  // console.log(loading, payload, error, query);
  return <BurnDown loading={loading} error={error} items={payload} onReload={query}/>;

};

export default BurnDownContainer;


//query data and send to BurnDown
