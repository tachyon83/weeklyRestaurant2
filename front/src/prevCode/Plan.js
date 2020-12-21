import React, { useRef } from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const PlanStyled = styled.div`
  /* div 스타일*/
  background-color: rgba(255, 255, 255, 0.8);
  height: 85vh;
  width: 80%;
  margin: 0px auto;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;

  .rbc-calendar {
    height: 100%;
    width: 100%;
  }
`;

const Plan = () => {
  const refPlan = useRef();
  return (
    <PlanStyled ref={refPlan}>
      <Calendar
        localizer={localizer}
        events={[
          {
            title: "닭볶음탕",
            allDay: false,
            start: new Date(2020, 9, 23, 6, 0),
            end: new Date(2020, 9, 23, 7, 0),
          },
          {
            title: "라면",
            allDay: false,
            start: new Date(2020, 9, 23, 12, 0),
            end: new Date(2020, 9, 23, 13, 0),
          },
          {
            title: "짜장면",
            allDay: false,
            start: new Date(2020, 9, 23, 18, 0),
            end: new Date(2020, 9, 23, 19, 0),
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        step={180}
        views={["month", "week"]}
        min={new Date(2008, 0, 1, 6, 0)}
        max={new Date(2008, 0, 1, 19, 0)}
      ></Calendar>
    </PlanStyled>
  );
};

Plan.defaultProps = {
  today: 1,
};

export default Plan;
