import React from 'react';
import Calendar from './Calendar';
import CookingDetail from './CookingDetail';
import CookingList from './CookingList';

const Container = (props) => {
  return (
    <>
      <Calendar />
      <CookingList />
      <CookingDetail />
    </>
  )
};

export default Container;