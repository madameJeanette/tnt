import React from 'react';
import { fetchDailyCards } from '../apicalls/actions/fetchDailyCards'
import { useSuspenseQuery } from 'react-fetching-library';
import DailyStandUpCards from '../DailyStandUpCards';


export const DailyStandUpContainer = () => {
    const { loading, payload, error, query} = useSuspenseQuery(fetchDailyCards);
 
  console.log(loading, payload, error, query);
    return ( <div>
        
        <DailyStandUpCards loading={loading} error={error} items={payload} onReload={query} />
        </div>
        )
    
};

export default DailyStandUpContainer;
