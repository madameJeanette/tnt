//setting today to an actual date for my endpoint


var day = new Date()
var today = day.toISOString().split('T', 1)[0]


export const fetchDailyCards = {
    method: 'GET',
    endpoint: 'board/qDAFPals/detailed',
    headers: 
    {"Authorization": "Basic " + btoa("test:test")},
    parameters:
    {
        "key": "62f0297bf821e374ae28a1fbab5ef9fb",
        "token": "dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"
    }
    
  }
  
  export default fetchDailyCards
  