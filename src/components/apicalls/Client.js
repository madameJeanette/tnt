import { createClient } from 'react-fetching-library';


// In real application this const will be stored in ENV's
const HOST = 'https://jsonplaceholder.typicode.com/';

export const requestHostInterceptor = host => client => async action => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
});


