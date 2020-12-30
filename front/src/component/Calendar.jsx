import React, {useCallback, useState, useEffect} from "react";
import CalendarItem from './CalendarItem'

const getWeek = (dowOffset) => {
  dowOffset = typeof(dowOffset) == 'number' ? dowOffset : 0;
  var newdate = new Date();
  var newYear = new Date(newdate.getFullYear(),0,1);
  console.log(newYear)
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
const todayYear = date.getFullYear(); // 년
const todayMonth = date.getMonth() + 1; // 월
const todayDate = date.getDate(); // 날짜
const todayDay = date.getDay(); // 요일
const todayWeek = getWeek(); // 몇주차
const lastDate = new Date(todayYear, todayMonth, 0).getDate();
const todayYearAndDay = Number(`${todayYear}${todayWeek}`);
const getLastDay = function(year, month){
  return new Date(year, month, 0).getDay();
}
const getLastDate = function(year, month){
  return new Date(year, month, 0).getDate();
}
const getPrevLastDate = function(year, month){
  if(month == 1) {
    return new Date(year - 1, 12, 0).getDate();
  } else {
    return new Date(year, month - 1, 0).getDate();
  }
}

const Calendar = (props) => {
  const { setIsDetailPopup, setIsListPopup } = props;
  const [ calendarDateInfo, setCalendarDateInfo ] = useState({
    setYear : todayYear,
    setMonth : todayMonth,
    setDay : todayDay,
    setDate : todayDate
  });
  const [ calendarDateArr, setCalendarDataArr ] = useState([]);

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

  const calendarCalc = useCallback((year, month, day, date) => {
    let calendarArr = [];
    for(let i = 0; i < 7; i++) {
      if(day > i) {
        if(date - day + i <= 0){
          calendarArr.unshift(getPrevLastDate(year, month) - i);
        } else{
          calendarArr.push(date - day + i);
        }
      } else {
        if(date - day + i > lastDate){
          calendarArr.push(i - getLastDay(year, month));
        } else {
          calendarArr.push(date - day + i);
        }
      }
    }
    setCalendarDataArr(calendarArr)
  });

  useEffect(() => {
    calendarCalc(calendarDateInfo.setYear, calendarDateInfo.setMonth, calendarDateInfo.setDay, calendarDateInfo.setDate);
  }, [calendarDateInfo])

  const prevCalendar = useCallback(()=>{
    // 1월에서 이전달로 갈시
    if(calendarDateInfo.setDate < 8 && calendarDateInfo.setMonth == 1) {
      setCalendarDateInfo({
        ...calendarDateInfo, 
        setYear : calendarDateInfo.setYear -1,
        setMonth : 12,
        setDate : 31 + ( calendarDateInfo.setDate - 7 )
      })
    } else if (calendarDateInfo.setDate < 8){
      setCalendarDateInfo({
        ...calendarDateInfo, 
        setMonth : calendarDateInfo.setMonth - 1,
        setDate : getPrevLastDate(calendarDateInfo.setYear, calendarDateInfo.setMonth) + ( calendarDateInfo.setDate - 7 )
      })
    } else {
      setCalendarDateInfo({
        ...calendarDateInfo, 
        setDate : calendarDateInfo.setDate - 7
      })
    }
  })

  const nextCalendar = useCallback(()=>{
    if(calendarDateInfo.setDate > 24 && calendarDateInfo.setMonth == 12) {
      setCalendarDateInfo({
        ...calendarDateInfo, 
        setYear : calendarDateInfo.setYear + 1,
        setMonth : 1,
        setDate : 1 + ( calendarDateInfo.setDate - 25 )
      })
    } else if (calendarDateInfo.setDate > 24){
      setCalendarDateInfo({
        ...calendarDateInfo, 
        setMonth : calendarDateInfo.setMonth + 1,
        setDate : 7 - getLastDate(calendarDateInfo.setYear, calendarDateInfo.setMonth) + calendarDateInfo.setDate
      })
    } else {
      setCalendarDateInfo({
        ...calendarDateInfo, 
        setDate : calendarDateInfo.setDate + 7
      })
    }
  })

  const todayCalendar = useCallback(()=>{
    setCalendarDateInfo({
      setYear : todayYear,
      setMonth : todayMonth,
      setDay : todayDay,
      setDate : todayDate
    });
  })

  return(
  <div className="LineBox">
    <div className="CalendarTitle">
      <button onClick={prevCalendar}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <h2>{calendarDateInfo.setMonth}월 주간 식단표 <button className="Calendar__todayBtn" onClick={todayCalendar}>today</button></h2>
      <button onClick={nextCalendar}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
    
    <ul className="Calendar">
      {
        calendarDateArr.map((item, i) =>{
          return (
          <CalendarItem 
            setIsDetailPopup={setIsDetailPopup} 
            setIsListPopup={setIsListPopup} 
            date={item} 
            week={i} 
            key={i}
            setDay={calendarDateInfo.setDay}
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
