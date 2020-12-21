import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./Navgation";
import Aside from "./Aside";
import Plan from "./Plan";
import Kichen from "./Kichen";
import Stock from "./Stock";
import SignIn from "./SignIn";
import AddMenu from './kichens/AddMenu';

const HomeStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position : relative;

  background-image: url("https://www.wallpapertip.com/wmimgs/50-504393_background-food-images-hd.jpg");
  background-size: 100%;
  main {
    height: 95vh;
    display: flex;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <HomeStyled className="Home">
      <BrowserRouter>
        <Navigation />
        <main>
          <Aside />
          <Route path="/weeklyRestaurant" component={Plan} exact={true} />
          <Route
            path="/weeklyRestaurant/Kichen"
            component={Kichen}
            exact={true}
          />
           <Route path="/weeklyRestaurant/Kichen/AddMenu" component={AddMenu} />
          <Route
            path="/weeklyRestaurant/Stock"
            component={Stock}
            exact={true}
          />
          <Route path="/weeklyRestaurant/SignIn" component={SignIn} />
          
        </main>
      </BrowserRouter>
    </HomeStyled>
  );
};

export default Home;
