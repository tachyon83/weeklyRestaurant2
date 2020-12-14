
// const today = new Date();
// const calendarFunction = (year, month) => {
//     let calHtml = '';
//     const setDate = new Date(year, month - 1, 1); //오늘 날짜의 Date 객체
//     const firstDayName = setDate.getDay(); //이번 달의 처음 요일
//     const lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0).getDate(); //이번 달의 마지막 날
//     const prevLastDay = new Date( today.getFullYear(), today.getMonth(), 0 ).getDate(); //지난 달의 마지막 날

//     //이번 달 날짜 개수를 세기 위한 변수
//     let startDayCount = 1;
//     let lastDayCount = 1;

//     for (let j = 0; j < 7; j++) {
//         // i == 0: 1주차일 때
//         // j < firstDayName: 이번 달 시작 요일 이전 일 때
//         if (i == 0 && j < firstDayName) {
//             calHtml += `<div><span>${(prevLastDay - (firstDayName - 1) + j)}</span></div>`;
//         }
//         // i == 0: 1주차일 때
//         // j == firstDayName: 이번 달 시작 요일일 때
//         else if (i == 0 && j == firstDayName) {
//             calHtml += `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
//         }
//         // i == 0: 1주차일 때
//         // j > firstDayName: 이번 달 시작 요일 이후 일 때
//         else if (i == 0 && j > firstDayName) {
//             //일요일일 때, 토요일일 때, 나머지 요일 일 때
//             calHtml += `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
//         }
//         // startDayCount <= lastDay: 이번 달의 마지막 날이거나 이전일 때
//         else if (i > 0 && startDayCount <= lastDay) {
//             //일요일일 때, 토요일일 때, 나머지 요일 일 때
//             calHtml += `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
//         }
//         // startDayCount > lastDay: 이번 달의 마지막 날 이후일 때
//         else if (startDayCount > lastDay) {
//             calHtml += `<div><span>${lastDayCount++}</span><span></span></div>`;
//         }
//     }

//     for(let i = 0; i < 7; i++) {
//         if()
//     }
// };

// if (today.getMonth() + 1 < 10) {
//     calendarFunction(today.getFullYear(), "0" + (today.getMonth() + 1));
// } else {
//     calendarFunction(today.getFullYear(), "" + (today.getMonth() + 1));
// }

// export default calendarFunction;