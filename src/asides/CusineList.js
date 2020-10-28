import React, { useState } from "react";
import styles from "styled-components";

import KoreanCuisine from "./cuisines/KoreanCuisine";
import WesternCuisine from "./cuisines/WesternCuisine";
import JapanCuisine from "./cuisines/JapanCuisine";
import ChinaCuisine from "./cuisines/ChinaCuisine";

const CusineListStyled = styles.ul`
  list-style : none;
  padding-left : 15px;
  .cuisines{
    border-bottom : 1px solid lightgrey;
    padding-bottom : 10px;
    margin-bottom : 10px;
  }
`;

const CusineList = () => {
  const [cuisineClicked, setCusineClicked] = useState({
    koreanClicked: false,
    WesternClicked: false,
    JapanClicked: false,
    ChinaClicked: false,
  });

  const handleClick = (e) => {
    const { className } = e.target;
    setCusineClicked({
      ...cuisineClicked,
      [className]: !cuisineClicked[className],
    });
  };

  return (
    <CusineListStyled>
      <li className="cuisines">
        <details>
          <summary className="koreanClicked" onClick={handleClick}>
            한식
          </summary>
          {cuisineClicked.koreanClicked ? <KoreanCuisine /> : null}
        </details>
      </li>
      <li className="cuisines">
        <details>
          <summary className="WesternClicked" onClick={handleClick}>
            양식
          </summary>
          {cuisineClicked.WesternClicked ? <WesternCuisine /> : null}
        </details>
      </li>
      <li className="cuisines">
        <details>
          <summary className="JapanClicked" onClick={handleClick}>
            일식
          </summary>
          {cuisineClicked.ChinaClicked ? <JapanCuisine /> : null}
        </details>
      </li>
      <li className="cuisines">
        <details>
          <summary className="ChinaClicked" onClick={handleClick}>
            중식
          </summary>
          {cuisineClicked.JapanClicked ? <ChinaCuisine /> : null}
        </details>
      </li>
    </CusineListStyled>
  );
};

export default CusineList;
