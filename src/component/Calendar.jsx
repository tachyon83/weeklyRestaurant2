import React, {useState} from "react";
import CalendarItem from './CalendarItem'

const getWeek = (dowOffset) => {
  dowOffset = typeof(dowOffset) == 'number' ? dowOffset : 0;
  var newdate = new Date();
  var newYear = new Date(newdate.getFullYear(),0,1);
  var day = newYear.getDay() - dowOffset; 
  day = (day >= 0 ? day : day + 7);
  var daynum = Math.floor((newdate.getTime() - newYear.getTime() -
    (newdate.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
  var weeknum;
  if(day < 4) {
    weeknum = Math.floor((daynum+day-1)/7) + 1;
    if(weeknum > 52) {
      let nYear = new Date(newdate.getFullYear() + 1,0,1);
      let nday = nYear.getDay() - dowOffset;
      nday = nday >= 0 ? nday : nday + 7;
      weeknum = nday < 4 ? 1 : 53;
    }
  }
  else {
    weeknum = Math.floor((daynum+day-1)/7);
  }
  return weeknum;
};

const date = new Date();
const todayYear = date.getFullYear();
const todayMonth = date.getMonth() + 1;
const todayDate = date.getDate();
const todayDay = date.getDay();
const todayWeek = getWeek();
const todayYearAndDay = Number(`${todayYear}${todayWeek}`);
console.log(todayYear, todayMonth, todayDate, todayDay, todayWeek, todayYearAndDay)

const calendarArr = [];

const calendarCalc = () => {
  for(let i = 0; i < 7; i++) {
    if(todayDay > i) {
      calendarArr.push(todayDate - todayDay + i)
    } else {
      calendarArr.push(todayDate + i - 1)
    }
  }
}

calendarCalc()

const Calendar = (props) => {
  const { setIsDetailPopup, setIsListPopup } = props;

  const [ calendarData, setCalendarData ] = useState({
    202050 : [
      ['토스트000','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
    ],
    202051 : [
      ['토스트111','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
    ],
    202052 : [
      ['토스트222','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
      ['토스트','김치찌개','스테이크'],
    ],
  })

  

  return(
  <div className="LineBox">
    <h2>{todayMonth}월 주간 식단표</h2>
    <ul className="Calendar">
      {
        calendarArr.map((item, i) =>{
          return (
          <CalendarItem 
            setIsDetailPopup={setIsDetailPopup} 
            setIsListPopup={setIsListPopup} 
            date={item} 
            week={i} 
            key={i}
            calendarData={calendarData[todayYearAndDay][i]}
            setCalendarData={setCalendarData}
          />
          )
        })
      }
    </ul>
  </div>
  );
};

export default Calendar;
