import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const SignInStyled = styled.form`
  /* div 스타일*/
  width: 340px;
  height: 300px;
  margin: 0px auto;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 5px 10px black;
  padding: 20px;

  /* flex 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .SignIn-inputs {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 20px;
    input {
      flex-grow: 1;
    }
  }
  button {
  }

  @media (max-width: 768px) {

    width: 50vw;
    height: 300px;
  }
`;

const SignIn = () => {
  return (
    <SignInStyled className="SignIn">
      <FontAwesomeIcon icon={faUtensils} size={"3x"} />
      <div className="SignIn-inputs">
        <input placeholder="ID" required />
        <input placeholder="PW" type="password" required />
        <button>Sign In</button>
      </div>
    </SignInStyled>
  );
};

export default SignIn;
