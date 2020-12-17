import React, {useCallback} from "react";

const CalendarItem = (props) => {
    const { setIsDetailPopup, setIsListPopup, date, week, calendarData, setCalendarData } = props;

    const handleShowDetail = useCallback(() => {
        setIsDetailPopup(true)
    }, [setIsDetailPopup])

    // const handleDeleteOnCalendar = useCallback(() => {
    //     console.log('test')
    // }, [])

    const handleShowList = useCallback(() => {
        setIsListPopup(true)
    }, [setIsListPopup])

    const weekCalc = (week) => {
        switch (week) {
            case 0 : return '일'
            case 1 : return '월'
            case 2 : return '화'
            case 3 : return '수'
            case 4 : return '목'
            case 5 : return '금'
            case 6 : return '토'
        }
    }
    
  return (
    <li className="Calendar__item">
        <div className="Calendar__day">
        <span>{weekCalc(week)}</span>
        <b>{date}</b>
        </div>
        <div className="Calendar__menu">
        <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
            <span>아침</span>
            </div>
            <div className="CalendarMenu__wrap">
            <div className="CalendarMenu__thumb">
                <img
                src="https://www.paris.co.kr/wp-content/uploads/200312-_670-1280x1280.jpg"
                alt=""
                />
            </div>
            <div className="CalendarMenu__title">토스트</div>
            <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                <i className="fas fa-search"></i>
                <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete">
                <i className="far fa-trash-alt"></i>
                <i className="ir">메뉴 삭제</i>
                </button>
            </div>
            </div>
        </div>
        <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
            <span>점심</span>
            </div>
            <div className="CalendarMenu__wrap">
            <div className="CalendarMenu__thumb">
                <img
                src="https://image.auction.co.kr/itemimage/1b/fb/ee/1bfbee3086.jpg"
                alt=""
                />
            </div>
            <div className="CalendarMenu__title">닭도리탕</div>
            <div className="CalendarMenu__hover">
                <button className="CalendarMenu__button CalendarMenu__button--more" onClick={handleShowDetail}>
                <i className="fas fa-search"></i>
                <i className="ir">상세 보기</i>
                </button>
                <button className="CalendarMenu__button CalendarMenu__button--delete">
                <i className="far fa-trash-alt"></i>
                <i className="ir">메뉴 삭제</i>
                </button>
            </div>
            </div>
        </div>
        <div className="Calendar__section CalendarMenu">
            <div className="CalendarMenu__tag">
            <span>저녁</span>
            </div>
            <button className="CalendarMenu__button CalendarMenu__button--add" onClick={handleShowList}>
            <i className="fas fa-plus"></i>
            <i className="ir">메뉴 추가</i>
            </button>
        </div>
        </div>
    </li>
  );
};

export default CalendarItem;
