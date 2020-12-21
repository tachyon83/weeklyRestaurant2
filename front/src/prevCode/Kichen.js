import React, { useRef, useState } from "react";
import styled from "styled-components";

import KoreaKichen from "./kichens/KoreaKichen";
import WesternKichen from "./kichens/WesternKichen";
import JapanKichen from "./kichens/JapanKichen";
import ChinaKichen from "./kichens/ChinaKichen";
import { Link } from "react-router-dom";

const KichenStyled = styled.div`
  overflow-x: hidden;
  /* div 스타일 */
  height: 85vh;
  width: 80vw;
  margin: 0px auto;
  background-color: white;
  box-shadow: 5px 5px 10px black;
  border-radius: 5px;
  position: relative;

  h1 {
    display: flex;
    justify-content: space-around;
  }

  ul {
    padding: 0px;
    list-style: none;
    width: 320vw;
    display: flex;
    li {
      flex-shrink: 0;
      width: 80vw;
    }
  }
  //좌우이동버튼
  .slide-left,
  .slide-right {
    cursor: pointer;
    width: 50px;
    background: none;
    border: none;
  }
  //위치맞추기용 좌우이동버튼버튼과 같은 wdith 값
  .tempSpace {
    width: 50px;
  }

  .add {
    position: absolute;
    top: 0px;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 768px) {
    height: 90vh;
    width: 90%;
    ul {
      width: 300vw;
      li {
        flex-shrink: 0;
        width: 100vw;
      }
    }
  }
`;

const CUISINES = ["한식", "양식", "일식", "중식"];

const Kichen = () => {
  const refUl = useRef();
  const slideCount = useRef(0);
  const [isDisplay, setIsDisplay] = useState({
    index: 0,
    left: false,
    right: true,
  });

  const handleClick = (e) => {
    const { className } = e.target;

    if (className === "slide-left") {
      slideCount.current--;
    } else if (className === "slide-right") {
      slideCount.current++;
    }
    const nowPosition = -1 * refUl.current.clientWidth * slideCount.current; //위치계산
    refUl.current.style.transform = `translateX(${
      nowPosition / CUISINES.length
    }px)`;
    refUl.current.style.transitionDuration = `2s`;

    switch (slideCount.current) {
      case 0:
        setIsDisplay({ ...isDisplay, index: slideCount.current, left: false });
        break;
      case CUISINES.length - 1:
        setIsDisplay({ ...isDisplay, index: slideCount.current, right: false });
        break;
      default:
        setIsDisplay({
          index: slideCount.current,
          left: true,
          right: true,
        });
        break;
    }
  };

  const { index, left, right } = isDisplay;

  return (
    <KichenStyled>
      <h1>
        {left ? (
          <div className="slide-left" onClick={handleClick}>
            &lt;
          </div>
        ) : (
          <span className="tempSpace"></span>
        )}
        {CUISINES[index]}
        {right ? (
          <div className="slide-right" onClick={handleClick}>
            &gt;
          </div>
        ) : (
          <span></span>
        )}
      </h1>
      <ul ref={refUl}>
        <li>
          <KoreaKichen />
        </li>
        <li>
          <WesternKichen />
        </li>
        <li>
          <JapanKichen />
        </li>
        <li>
          <ChinaKichen />
        </li>
      </ul>
      <Link
        to={{
          pathname: "/weeklyRestaurant/Kichen/AddMenu",
          state: CUISINES[index],
        }}
        className="add"
      >
        +
      </Link>
    </KichenStyled>
  );
};

export default Kichen;
