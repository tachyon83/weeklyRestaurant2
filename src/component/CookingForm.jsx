import React from "react";

const CookingForm = (props) => {
  return (
    <div className="LineBox">
      <h2>요리 추가</h2>
      <form className="CookingForm">
        <ul className="CookingForm__top">
          <li>
            <dl>
              <dt>
                <label htmlFor="">요리명</label>
              </dt>
              <dd>
                <input type="text" />
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="">요리사진 URL</label>
              </dt>
              <dd>
                <input type="text" />
              </dd>
            </dl>
          </li>
        </ul>
        <ul className="CookingForm__category">
          <li>
            <dl>
              <dt>
                육류
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">닭</option>
                    <option value="">소고기</option>
                    <option value="">돼지고기</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">100</option>
                    <option value="">200</option>
                    <option value="">300</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  {`{unit}`}
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">직접입력</button>
                </div>
              </dd>
              <dd style={{marginTop: '10px', paddingTop: 0, border: 'none'}}>
                <div className="CookingForm__section01">
                  <input type="text" placeholder="재료명" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" placeholder="수량" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" placeholder="단위" />
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">취소</button>
                </div>
              </dd>
            </dl>
            <div className="CookingForm__more">
              <button className="CookingForm__optionButton CookingForm__optionButton--add">+ 추가</button>
            </div>
          </li>
          <li>
            <dl>
              <dt>
                어류
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">고등어</option>
                    <option value="">삼치</option>
                    <option value="">전복</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  {`{unit}`}
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">직접입력</button>
                </div>
              </dd>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">고등어</option>
                    <option value="">삼치</option>
                    <option value="">전복</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  {`{unit}`}
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">직접입력</button>
                </div>
              </dd>
            </dl>
            <div className="CookingForm__more">
              <button className="CookingForm__optionButton CookingForm__optionButton--add">+ 추가</button>
            </div>
          </li>
          <li>
            <dl>
              <dt>
                부재료
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">감자</option>
                    <option value="">양파</option>
                    <option value="">당근</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  {`{unit}`}
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">직접입력</button>
                </div>
              </dd>
              <dd style={{marginTop: '10px', paddingTop: 0, border: 'none'}}>
                <div className="CookingForm__section01">
                  <input type="text" placeholder="재료명" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" placeholder="수량" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" placeholder="단위" />
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">취소</button>
                </div>
              </dd>
            </dl>
            <div className="CookingForm__more">
              <button className="CookingForm__optionButton CookingForm__optionButton--add">+ 추가</button>
            </div>
          </li>
          <li>
            <dl>
              <dt>
                소스(양념)
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <input type="text" placeholder="재료명" value="종가집고추장" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" placeholder="수량" value="2" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" placeholder="단위" value="큰술" />
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">취소</button>
                </div>
              </dd>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">된장</option>
                    <option value="">간장</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  {`{unit}`}
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">직접입력</button>
                </div>
              </dd>
              <dd>
                <div className="CookingForm__section01">
                  <input type="text" placeholder="재료명" value="종가집고추장" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" placeholder="수량" value="2" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" placeholder="단위" value="큰술" />
                </div>
                <div className="CookingForm__section04">
                  <button className="CookingForm__optionButton">취소</button>
                </div>
              </dd>
            </dl>
            <div className="CookingForm__more">
              <button className="CookingForm__optionButton CookingForm__optionButton--add">+ 추가</button>
            </div>
          </li>
        </ul>
        <div className="CookingForm__buttonWrap">
          <button type="submit" className="CookingForm__button CookingForm__button--submit">요리추가</button>
          <button type="submit" className="CookingForm__button CookingForm__button--edit">요리수정</button>
          <button type="submit" className="CookingForm__button CookingForm__button--remove">요리삭제</button>
        </div>
      </form>
    </div>
  );
};

export default CookingForm;