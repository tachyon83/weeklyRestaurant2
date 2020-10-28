import React from "react";
import styled from "styled-components";

import Home from "./Home";

const AppStyled = styled.div`
  * {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const App = () => {
  return (
    <AppStyled>
      <Home />
    </AppStyled>
  );
};

export default App;
