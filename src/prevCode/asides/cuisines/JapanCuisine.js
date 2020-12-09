import React, { useEffect, useState } from "react";
// import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import styled from "styled-components";
import axios from "axios";

import Loading from "../../Loading";

const KoreanCuisineStyled = styled.ul`
  list-style: none;
  padding: 10px;
  .KoreanCuisine-li {
    width: 66%;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 5px;
    box-shadow: 5px 5px 10px black;
    position: relative;
    img {
      width: 100%;
      height: 150px;
    }
  }
`;

const CuisineContextMenuStyled = styled.ul`
  /* ul 스타일 */
  background-color: rgba(255, 255, 255, 0.8); //contextmenu배경색만 투명하게
  width: 80%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  position: absolute;
  left: 50%;
  top: 10%;
  z-index: 999;

  /* flex 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* 닫기 버튼 스타일 */
  span {
    position: absolute;
    top: 1px;
    right: 10px;
    color: red;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CuisineContextMenu = ({ handleContextMenu, recipe }) => {
  return (
    <CuisineContextMenuStyled>
      {/* <li>레시피 수정</li>
      <li>레시피 삭제</li>
      <li>급식표에 추가</li> */}
      <li>{recipe.recipeId}</li>
      <li>{recipe.recipeImgPath}</li>
      <li>{recipe.recipeName}</li>
      <span onClick={handleContextMenu}>X</span>
    </CuisineContextMenuStyled>
  );
};

const KoreanCuisine = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [isContextMenu, setIsContextMenu] = useState(false);

  useEffect(() => {
    try {
      console.log("test");
      axios.get("http://localhost:3001/recipe/list?req=KOR").then((result) => {
        const { data } = result;
        setRecipeList(data);
        setIsLoaded(() => true);
      });
    } catch (error) {
      console.log(error);
    }
  }, [recipeList]);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenu(() => {
      return !isContextMenu;
    });
  };

  return (
    <KoreanCuisineStyled className="KoreanCuisine">
      {isLoaded ? (
        recipeList.map((recipe) => {
          return (
            <li
              key={recipe.recipeId}
              className="KoreanCuisine-li"
              onContextMenu={handleContextMenu}
            >
              <img src={recipe.recipeImgPath} alt={recipe.recipeName} />
              {isContextMenu ? (
                <CuisineContextMenu
                  recipe={recipe}
                  handleContextMenu={handleContextMenu}
                />
              ) : null}
            </li>
          );
        })
      ) : (
        <Loading />
      )}
    </KoreanCuisineStyled>
  );
};

export default KoreanCuisine;
