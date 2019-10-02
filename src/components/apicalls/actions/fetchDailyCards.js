//Fetch daily Cards that are new



export const fetchDailyCards = {
    method: 'GET',
    endpoint: '/board/qDAFPals/newCards',
    headers: 
    {"Authorization": "Basic " + btoa("user:test")},
    // parameters:
    // {
    //     "key": "62f0297bf821e374ae28a1fbab5ef9fb",
    //     "token": "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    // }
    
  }
  
  export default fetchDailyCards
  