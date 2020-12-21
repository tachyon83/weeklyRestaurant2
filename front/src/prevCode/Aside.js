import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CusineList from "../asides/CusineList";

const AsideStyled = styled.div`
  list-style: none;
  height: 94.5vh;
  position: relative;

  & button {
    background-color: white;
    width: 30px;
    height: 10vh;
    position: absolute;
    top: 37.5vh;
    right: -30px;
    border: none;
    border-radius: 0px 20px 20px 0px;
    font-size: 2rem;
    cursor: pointer;
  }

  .AsideDetail-container {
    background-color: white;
    width: 15vw;
    height: inherit;
    border: 1px solid lightgray;
    align-items: center;
    .AsideDetail-container-admin {
      display: flex;
      align-items: center;
      svg {
        flex-grow: 1;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
      }
    }
  }
  @media (max-width: 768px) {
    .AsideDetail-container {
      position: absolute;
      width: 90vw;
      z-index: 999;
    }
  }
`;

const Aside = () => {
  const [isSlide, setIsSlide] = useState(false);

  const handleClick = () => {
    setIsSlide(() => !isSlide);
  };
  return (
    <AsideStyled>
      {isSlide ? (
        <>
          <div className="AsideDetail-container">
            <div className="AsideDetail-container-admin">
              <FontAwesomeIcon icon={faUser} size="3x" />
              <div>
                <Link to="/weeklyRestaurant/Kichen">메뉴 확인</Link>
                <br />
                <Link to="/weeklyRestaurant/Stock">재고 확인</Link>
              </div>
            </div>
            <CusineList />
            <button onClick={handleClick}>
              <b>-</b>
            </button>
          </div>
        </>
      ) : (
        <button onClick={handleClick}>
          <b>+</b>
        </button>
      )}
    </AsideStyled>
  );
};

export default Aside;
