//setting today to an actual date for my endpoint


var day = new Date()
var today = day.toISOString().split('T', 1)[0]


export const fetchDailyStandUp = {
    method: 'GET',
    endpoint: 'board/qDAFPals/teamstatistics/?today='+today,
    headers: 
    {"Authorization": "Basic " + btoa("test:test")},
    // parameters:
    // {
    // 'today': '2019-09-23',
    // }
    
  }
  
  export default fetchDailyStandUp
  