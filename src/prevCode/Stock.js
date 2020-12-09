import React from "react";
import styled from "styled-components";

import Loading from "./Loading";

const StockStyled = styled.div`
  /* div 스타일*/
  height: 85vh;
  width: 80vw;
  margin: 0px auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;

  display: flex;
  flex-direction: column;

  p {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    height: 90vh;
    width: 90%;
  }
`;

const Stock = () => {
  return (
    <StockStyled>
      <Loading />
    </StockStyled>
  );
};
export default Stock;
