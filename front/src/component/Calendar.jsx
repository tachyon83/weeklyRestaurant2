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
  const { setIsDetailPopup, setIsListPopup, islogin, setPopupCookingId } = props;
  const [ calendarDateInfo, setCalendarDateInfo ] = useState({
    setYear : todayYear,
    setMonth : todayMonth,
    setDay : todayDay,
    setDate : todayDate
  });
  const [ calendarDateArr, setCalendarDataArr ] = useState([]);

  const [ calendarData, setCalendarData ] = useState({
    result: true,
		code: 0,
		data:[
			[
        null,
				{id:1134,name:"닭볶음탕",style:"KOR",img:"https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg"},
        {id:4238,name:"햄버그스테이크",style:"WES",img:"http://image.gsshop.com/image/55/31/55314791_L1.jpg"},
			],[
        null,
				{id:3105,name:"마파두부",style:"CHN",img:"https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/1168/pad_thumb_m.png&convert=jpgmin&rt=600"},
        null,
      ],[
				{id:321,name:"돈까스",style:"WES",img:"http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/20/1/4/9/3/1/8/yVdYI/2827149318_B.jpg"},
        null,
        null,
      ],[
        null,
        {id:1376,name:"소고기콩나물비빔밥",style:"KOR",img:"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F143948354FB8FDF6296B73"},
        null,
      ],[
        null,
        {id:806,name:"순대국밥",style:"KOR",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyOmrqbHnyUqJfVUMxY6l_my0eyw_twRPGEw&usqp=CAU"},
        null,

      ],[
        null,
        {id:2965,name:"닭칼국수",style:"KOR",img:"https://imagescdn.gettyimagesbank.com/500/201708/a10968180.jpg"},
        {id:486,name:"유산슬밥",style:"CHN",img:"https://www.sk5.co.kr/img_src/s600/a897/a8970355.jpg"},
      ],[
        
        null,
        {id:2317,name:"멸치국수",style:"KOR",img:"https://cdn.pixabay.com/photo/2015/04/06/16/32/if-709614__340.jpg"},
        {id:504,name:"짜장면",style:"CHN",img:"https://recipe1.ezmember.co.kr/cache/recipe/2016/07/02/40c4f639ca973d9acccecdf7cbe0cbc41.jpg"},
      ]
		]
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
            calendarData={calendarData.data[i]}
            setCalendarData={setCalendarData}
            islogin={islogin}
            setPopupCookingId={setPopupCookingId}
          />
          )
        })
      }
    </ul>
  </div>
  );
};

export default Calendar;
