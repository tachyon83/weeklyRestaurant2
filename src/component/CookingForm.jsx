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
                <label htmlFor="">육류</label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor=""></label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <input type="text" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" />
                </div>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="">어류</label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor=""></label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <input type="text" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" />
                </div>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="">부재료</label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor=""></label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <input type="text" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" />
                </div>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="">소스(양념)</label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section02">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
                <div className="CookingForm__section03">
                  <select name="" id="">
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                  </select>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor=""></label>
              </dt>
              <dd>
                <div className="CookingForm__section01">
                  <input type="text" />
                </div>
                <div className="CookingForm__section02">
                  <input type="text" />
                </div>
                <div className="CookingForm__section03">
                  <input type="text" />
                </div>
              </dd>
            </dl>
          </li>
        </ul>
        <div className="CookingForm__buttonWrap">
          <button type="submit" className="CookingForm__button CookingForm__button--add">요리추가</button>
          <button type="submit" className="CookingForm__button CookingForm__button--edit">요리수정</button>
          <button type="submit" className="CookingForm__button CookingForm__button--remove">요리삭제</button>
        </div>
      </form>
    </div>
  );
};

export default CookingForm;