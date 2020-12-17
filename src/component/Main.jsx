import React, { useState } from 'react';
import Calendar from './Calendar';
import CookingDetailPop from './CookingDetailPop';
import CookingListPop from './CookingListPop';

const Main = (props) => {
  const { isDetailPopup, isListPopup, setIsDetailPopup, setIsListPopup } = props;
  const [ popupCookingId, setPopupCookingId ] = useState();

  return (
    <>
      <Calendar 
        setIsDetailPopup={setIsDetailPopup}
        setIsListPopup={setIsListPopup}
      />

      {isDetailPopup && <CookingDetailPop setIsDetailPopup={setIsDetailPopup} popupCookingId={popupCookingId} />}
      {isListPopup && <CookingListPop setIsListPopup={setIsListPopup} setIsDetailPopup={setIsDetailPopup} setPopupCookingId={setPopupCookingId} />}
    </>
  )
};

export default Main;