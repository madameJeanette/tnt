import React from 'react';
import { fetchDailyStandUp } from '../apicalls/actions/fetchDailyStandUp';
import { useSuspenseQuery } from 'react-fetching-library';
import Statistics from '../Statistics';


export const DailyStandUpContainer = () => {
  const { loading, payload, error, query} = useSuspenseQuery(fetchDailyStandUp);
 
  // console.log(loading, payload, error, query);
  return <Statistics loading={loading} error={error} items={payload} onReload={query}/>;

};

export default DailyStandUpContainer;
