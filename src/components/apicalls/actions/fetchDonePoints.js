

var today = new Date(Date.now())
var twoWeeks = new Date(Date.now() + 12096e5)
console.log(today)
console.log(twoWeeks)

var formatToday = today.toISOString().split('T', 1)[0]
var formatTwoWeeks = twoWeeks.toISOString().split('T', 1)[0]

console.log(formatToday)
console.log( formatTwoWeeks)
// function GetISODateFromEpochTimestamp(date) {
//   var year = date.getFullYear();
//   var month = date.getMonth() + 1;
//   var day = date.getDate();

//   if (month < 10) {
//     month = "0" + month
//   }

//   if (day < 10) {
//     day = "0" + day
//   }

//   var result = year + "-" + month + "-" + day;
//   console.log(result)
//   return result
// }

// var formattedTodayTimestamp = GetISODateFromEpochTimestamp(today)
// var formattedTwoWeeksTimestamp = GetISODateFromEpochTimestamp(twoWeeks)

export const fetchDonePoints = {
  method: 'GET',
  endpoint: 'board/qDAFPals/burndownchartinfo/?startDate='+formatToday+'&endDate='+formatTwoWeeks,
  headers: 
  {"Authorization": "Basic " + btoa("test:test")},

}

export default fetchDonePoints
