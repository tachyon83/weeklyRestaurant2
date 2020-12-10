import React, {useState} from 'react';
import Calendar from './Calendar';
import CookingDetail from './CookingDetail';
import CookingList from './CookingList';

const Main = (props) => {
  const {showList, showDetail} = props;

  return (
    <>
      <Calendar 
        onShowDetail={props.onShowDetail}
        onShowList={props.onShowList}
        onDeleteOnCalendar={props.onDeleteOnCalendar}
        showDetail={showDetail}
        showList={showList}
      />

      {showDetail && <CookingDetail showDetail={showDetail} onCloseDetail={props.onCloseDetail} />}
      {showList && <CookingList showList={showList} onCloseList={props.onCloseList} />}
    </>
  )
};

export default Main;