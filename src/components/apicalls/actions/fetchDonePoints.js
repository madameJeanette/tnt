
export const fetchDonePoints = {
  method: 'GET',
  endpoint: 'board/qDAFPals/burndownchartinfo/?startDate=2019-09-01&endDate=2019-12-24',
  headers: 
  {"Authorization": "Basic " + btoa("test:test")},
  // parameters:
  // {
  // "startDate": Date.now(),
  // "endDate": (Date.now() + 14)
  // }
  
}

export default fetchDonePoints
