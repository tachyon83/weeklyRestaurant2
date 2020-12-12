import React, {useState} from 'react';
import Calendar from './Calendar';
import CookingDetailPop from './CookingDetailPop';
import CookingListPop from './CookingListPop';

const Main = (props) => {
  const { isDetailPopup, isListPopup, setIsDetailPopup, setIsListPopup } = props;

  return (
    <>
      <Calendar 
        setIsDetailPopup={setIsDetailPopup}
        setIsListPopup={setIsListPopup}
      />

      {isDetailPopup && <CookingDetailPop setIsDetailPopup={setIsDetailPopup} />}
      {isListPopup && <CookingListPop setIsListPopup={setIsListPopup} />}
    </>
  )
};

export default Main;