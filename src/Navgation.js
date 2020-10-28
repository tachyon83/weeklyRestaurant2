import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const NavgationStyle = styled.nav`
  /* 스타일 */
  background-color: white;
  box-shadow: 5px 5px 10px black;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 2vw 0px 2vw;
  /* 로고 & 이름  */
  h1 {
    margin: 0px;
  }
  /* 로그인 폼 */
  form {
    display: flex;
    gap: 1vw;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    form {
      display: none;
    }
  }
`;

const Navgation = () => {

  return (
    <NavgationStyle>
      <h1>
        <Link to="/weeklyRestaurant">
          <FontAwesomeIcon icon={faUtensils} />
          &nbsp; Weekly Restaurant
        </Link>
      </h1>
      <h1>
        <Link to="/weeklyRestaurant/SignIn">Sign In</Link>
      </h1>
    </NavgationStyle>
  );
};

export default Navgation;
