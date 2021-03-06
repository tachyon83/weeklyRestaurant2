import React, { useCallback } from "react";
import axios from 'axios';
const host = require("../host");

const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
const emptyImage = ["fa-utensils", "fa-cheese", "fa-hamburger", "fa-fish", "fa-ice-cream", "fa-apple-alt", "fa-carrot", "fa-hotdog", "fa-egg", "fa-cookie-bite"];
const randomImageNumber = () => {
    return Math.floor(Math.random() * 10);
}

const CalendarItem = (props = null) => {
  const { calendarData, setCalendarData, calendarSelectData, setIsDetailPopup, setIsListPopup, date, week, setYear, setWeek, setDay, islogin, setPopupCookingId, setCalendarSelectData } = props;

  return (
    <li
      className={setDay === week ? "Calendar__item active" : "Calendar__item"}
    >
      <div className="Calendar__day">
        <span>{weekArr[week]}</span>
        <b>{date}</b>
      </div>
      <div className="Calendar__menu">
        <div className="Calendar__section CalendarMenu">
          <div className="CalendarMenu__tag">
            <span>아침</span>
          </div>
          {
            calendarData[0] 
            ? <CalendarItemContent 
                name={calendarData[0].name}
                id={calendarData[0].id}
                img={calendarData[0].img}
                setIsDetailPopup={setIsDetailPopup}
                setPopupCookingId={setPopupCookingId}
                islogin={islogin}
                calendarData={calendarData}
                setCalendarData={setCalendarData} 
                calendarSelectData={calendarSelectData}
              /> 
            : islogin 
              ? <CalendarItemAdd 
                  setIsListPopup={setIsListPopup} 
                  setCalendarSelectData={setCalendarSelectData} 
                  eatTime={0} 
                  week={week} 
                  setYear={setYear}
                  setWeek={setWeek} 
                /> 
              : <CalendarItemEmpty />
          }
        </div>
        <div className="Calendar__section CalendarMenu">
          <div className="CalendarMenu__tag">
            <span>점심</span>
          </div>
          {
            calendarData[1] 
            ? <CalendarItemContent 
                name={calendarData[1].name}
                id={calendarData[1].id}
                img={calendarData[1].img}
                setIsDetailPopup={setIsDetailPopup}
                setPopupCookingId={setPopupCookingId}
                islogin={islogin}
                calendarData={calendarData}
                setCalendarData={setCalendarData} 
                calendarSelectData={calendarSelectData}
              /> 
            : islogin 
              ? <CalendarItemAdd 
                  setIsListPopup={setIsListPopup} 
                  setCalendarSelectData={setCalendarSelectData} 
                  eatTime={1} 
                  week={week} 
                  setYear={setYear}
                  setWeek={setWeek} 
                /> 
              : <CalendarItemEmpty />
          }
        </div>
        <div className="Calendar__section CalendarMenu">
          <div className="CalendarMenu__tag">
            <span>저녁</span>
          </div>
          {
            calendarData[2] 
            ? <CalendarItemContent 
                name={calendarData[2].name}
                id={calendarData[2].id}
                img={calendarData[2].img}
                setIsDetailPopup={setIsDetailPopup}
                setPopupCookingId={setPopupCookingId}
                islogin={islogin}
                calendarData={calendarData}
                setCalendarData={setCalendarData} 
                calendarSelectData={calendarSelectData}
              /> 
            : islogin 
              ? <CalendarItemAdd 
                  setIsListPopup={setIsListPopup} 
                  setCalendarSelectData={setCalendarSelectData} 
                  eatTime={2} 
                  week={week} 
                  setYear={setYear}
                  setWeek={setWeek} 
                /> 
              : <CalendarItemEmpty />
          }
        </div>
      </div>
    </li>
  );
};


const CalendarItemEmpty = (props) => {
  return (
    <div className="CalendarMenu__empty">
      <i className={`fas ${emptyImage[randomImageNumber()]}`}></i>
    </div>
  )
}

const CalendarItemAdd = (props) => {
  const { setIsListPopup, setCalendarSelectData, eatTime, week, setYear, setWeek } = props;

  const handleShowList = useCallback(() => {
    setIsListPopup(true);
    setCalendarSelectData({
      year: setYear,
      week: setWeek,
      planWeek: week,
      planEatTime: eatTime,
    });
  });

  return (
    <button
      className="CalendarMenu__button CalendarMenu__button--add"
      onClick={handleShowList}
    >
      <i className="fas fa-plus"></i>
      <i className="ir">메뉴 추가</i>
    </button>
  )
}

const CalendarItemContent = (props) => {
  const { setIsDetailPopup, name, id, img, setPopupCookingId, islogin, calendarData, setCalendarData, calendarSelectData } = props;

  const handleShowDetail = useCallback(() => {
    setPopupCookingId(id);
    setIsDetailPopup(true);
  });

  const handleDeleteOnCalendar = useCallback(() => {
    console.log(calendarData,calendarSelectData)
    // let planArr = [...calendarData];
    // planArr[calendarSelectData.planWeek][calendarSelectData.planEatTime] = null;

    // axios.put(`${host.server}/plan`,{
    //     year: calendarSelectData.year,
    //     week: calendarSelectData.week,
    //     plan: planArr
    // },{
    //     withCredentials: true
    // }).then((result) => {
    //     axios.get(`${host.server}/plan/${calendarSelectData.year}/${calendarSelectData.week}`, {
    //         withCredentials: true
    //     }).then((result) => {
    //         setCalendarData(result.data)
    //     }).catch(error => { console.log('failed', error) })
    // }).catch(error => { console.log('failed', error) })
  });

  return (
    <div className="CalendarMenu__wrap">
      <div className="CalendarMenu__thumb">
        <img
          src={img}
          alt=""
        />
      </div>
      <div className="CalendarMenu__title">{name}</div>
      <div className="CalendarMenu__hover">
        <button
          className="CalendarMenu__button CalendarMenu__button--more"
          onClick={handleShowDetail}
        >
          <i className="fas fa-search"></i>
          <i className="ir">상세 보기</i>
        </button>
        {
          islogin 
          ? 
          <button
              className="CalendarMenu__button CalendarMenu__button--delete"
              onClick={handleDeleteOnCalendar}
            >
              <i className="far fa-trash-alt"></i>
              <i className="ir">메뉴 삭제</i>
          </button>
          : null
        }
      </div>
    </div>
  )
}

export default CalendarItem;
