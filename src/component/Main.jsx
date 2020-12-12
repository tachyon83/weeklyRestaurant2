import React, {useState} from 'react';
import Calendar from './Calendar';
import CookingDetail from './CookingDetail';
import CookingList from './CookingList';

const Main = (props) => {
  const { isDetailPopup, isListPopup, setIsDetailPopup, setIsListPopup } = props;

  return (
    <>
      <Calendar 
        setIsDetailPopup={setIsDetailPopup}
        setIsListPopup={setIsListPopup}
      />

      {isDetailPopup && <CookingDetail setIsDetailPopup={setIsDetailPopup} />}
      {isListPopup && <CookingList setIsListPopup={setIsListPopup} />}
    </>
  )
};

export default Main;