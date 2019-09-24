import React from 'react';
import { fetchDailyStandUp } from '../apicalls/actions/fetchDailyStandUp';
import { fetchDailyCards } from '../apicalls/actions/fetchDailyCards'
import { useSuspenseQuery } from 'react-fetching-library';
import Statistics from '../Statistics';
import DailyStandUpCards from '../DailyStandUpCards';


export const DailyStandUpContainer = () => {
    const { loading, payload, error, query } = useSuspenseQuery(fetchDailyStandUp);
    const { loading1, payload1, error1, query1} = useSuspenseQuery(fetchDailyCards);
 
  // console.log(loading, payload, error, query);
  return <Statistics loading={loading} error={error} items={payload} onReload={query}/>;
  return <DailyStandUpCards loading={loading1} error={error1} items={payload1} onReload={query1}/>;
};

export default DailyStandUpContainer;
