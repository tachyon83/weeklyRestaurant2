import React, { useState } from 'react';
import Calendar from './Calendar';
import CookingDetailPop from './CookingDetailPop';
import CookingListPop from './CookingListPop';

const Main = (props) => {
  
  const { islogin } = props;
  const [ isDetailPopup, setIsDetailPopup ] = useState(false);
  const [ isListPopup, setIsListPopup ] = useState(false);
  const [ popupCookingId, setPopupCookingId ] = useState();
  const [ calendarSelectData, setCalendarSelectData ] = useState();
  const [ calendarPlan, setCalendarPlan ] = useState();

  return (
    <>
      <Calendar
        setIsDetailPopup={setIsDetailPopup}
        setIsListPopup={setIsListPopup}
        islogin={islogin}
        calendarSelectData={calendarSelectData}
        setPopupCookingId={setPopupCookingId}
        setCalendarSelectData={setCalendarSelectData}
        setCalendarPlan={setCalendarPlan}
      />
      {
        isDetailPopup &&
          <CookingDetailPop
            setIsDetailPopup={setIsDetailPopup}
            popupCookingId={popupCookingId}
          />
      }
      {
        isListPopup &&
          <CookingListPop
            setIsListPopup={setIsListPopup}
            setIsDetailPopup={setIsDetailPopup}
            setPopupCookingId={setPopupCookingId}
            calendarPlan={calendarPlan}
            popupCookingId={popupCookingId}
            calendarSelectData={calendarSelectData}
          />
      }
      {console.log(calendarSelectData)}
    </>
  )
};

export default Main;