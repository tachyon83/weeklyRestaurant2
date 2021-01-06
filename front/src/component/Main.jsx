import React, { useState } from 'react';
import Calendar from './Calendar';
import CookingDetailPop from './CookingDetailPop';
import CookingListPop from './CookingListPop';

const Main = (props) => {
  
  const { islogin } = props;
  const [isDetailPopup, setIsDetailPopup] = useState(false);
  const [isListPopup, setIsListPopup] = useState(false);
  const [ popupCookingId, setPopupCookingId ] = useState();

  return (
    <>
      <Calendar 
        setIsDetailPopup={setIsDetailPopup}
        setIsListPopup={setIsListPopup}
        islogin={islogin}
        setPopupCookingId={setPopupCookingId}
      />
      {isDetailPopup && <CookingDetailPop setIsDetailPopup={setIsDetailPopup} popupCookingId={popupCookingId} />}
      {isListPopup && <CookingListPop setIsListPopup={setIsListPopup} setIsDetailPopup={setIsDetailPopup} setPopupCookingId={setPopupCookingId} />}
    </>
  )
};

export default Main;