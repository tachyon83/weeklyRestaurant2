import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "../Loading";

const AddMenuStyled = styled.form`
  height: 85vh;
  width: 40vw;
  margin: 0px auto;
  background-color: white;
  box-shadow: 5px 5px 10px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  .AddMenu-head {
    border-bottom: 1px solid lightgray;
    padding: 2vw;
    gap: 2vw;

    display: flex;
    .AddMenu-head-tempImg {
      width: 50%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .AddMenu-head-inputs {
      width: 50%;
      display: flex;
      gap: 1vh;
      flex-direction: column;
      .AddMenu-head-commits {
        display: flex;
      }
    }
  }
  .AddMenu-ingredients {
    display: flex;
    flex-direction: column;

    & > ul {
      border: 1px solid lightgray;
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      li {
      }
    }
  }
  @media (max-width: 1280px) {
    height: 90vh;
    width: 95%;
  }
  @media (max-width: 768px) {
    height: 90vh;
    width: 95%;

    .AddMenu-head {
      flex-direction: column;
      .AddMenu-head-tempImg {
        width: 100%;
      }
      .AddMenu-head-inputs {
        margin: 2vw;
        width: 100%;
      }
    }
  }
`;

const AddMenu = ({ location, history }) => {
  const [ingredients, setIngredients] = useState({
    fish: null,
    meat: null,
    misc: null,
    sauce: null,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState("");
  const refImg = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:3001/recipe/new").then((result) => {
      const { data } = result;
      setIngredients(data);
      setIsLoaded(() => true);
    });
  }, []);

  const handleChange = (e) => {
    refImg.current.src = e.target.value;
    setUrl(e.target.value);
  };

  console.log(ingredients);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/recipe/new");
  };

  const { fish, meat, misc, sauce } = ingredients;

  return (
    <AddMenuStyled onSubmit={handleSubmit}>
      {/* <input value={location.state} readOnly></input> */}
      <div className="AddMenu-head">
        <div className="AddMenu-head-tempImg">
          <img
            ref={refImg}
            src="https://www.hongsasa.com/theme/GW_basic/img/no_img.jpg"
            alt="tempImg"
          />
        </div>
        <div className="AddMenu-head-inputs">
          <h1>#메뉴추가</h1>
          <input placeholder="메뉴 이름을 입력해 주십시오." />
          <input
            placeholder="이미지 url를 입력해 주십시오."
            value={url}
            onChange={handleChange}
          />

          <div className="AddMenu-head-commits">
            <button>메뉴에 추가하기</button>
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
      {isLoaded ? (
        <div className="AddMenu-ingredients">
          <ul className="AddMenu-ingredients-meats">
            <h2>#어류</h2>
            {fish.map((fish) => (
              <li>
                {fish.name}
                <input />
                {fish.단위}
              </li>
            ))}
          </ul>
          <ul className="AddMenu-ingredients-fishs">
            <h2>육류</h2>
            {meat.map((fish) => (
              <li>
                {fish.name}
                <input />
                {fish.단위}
              </li>
            ))}
          </ul>
          <ul className="AddMenu-ingredients-miscs">
            <h2>#부재료</h2>
            {misc.map((fish) => (
              <li>
                {fish.name}
                <input />
                {fish.단위}
              </li>
            ))}
          </ul>
          <ul className="AddMenu-ingredients-sauces">
            <h2>#소스</h2>
            {sauce.map((fish) => (
              <li>
                {fish.name}
                <input />
                {fish.단위}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Loading />
      )}
    </AddMenuStyled>
  );
};

export default AddMenu;
