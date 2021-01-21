import React, { useCallback, useState, useEffect } from "react";
import axios from 'axios';
import CookingSelectOption from './CookingSelectOption';
const host = require("../host");

const CookingForm = (props) => {

  const [cookingForm, setCookingForm] = useState({
    id: null,
    name: null,
    style: null,
    img: null,
    contents: {
      meat: {
        id: null,
        name: null,
        contents: null,
      },
      fish: {
        id: null,
        name: null,
        contents: null,
      },
      mics: {
        id: null,
        name: null,
        contents: null,
      },
      sauce: {
        id: null,
        name: null,
        contents: null,
      }
    }
  });

  const [baseOption, setBaseOption] = useState();

  const [selectOptionArr, setSelectOptionArr] = useState({
    meat: [
      {selfInput: false}
    ],
    fish: null,
    mics: null,
    sauce: null,
  });

  useEffect(() => {
    axios.get(`${host.server}/recipe/new`, {
      withCredentials: true
    }).then((result) => {
      console.log(result.data.data)
      setBaseOption(result.data.data)
    }).catch((error)=>{console.log('failed', error)})
  }, [])

  const onCookingCreate = useCallback((e) => {
    // axios.post(`${host.server}/recipe`, {
    //     withCredentials: true
    //   }, cookingForm).then((result) => {
    //     console.log(result)
    //   }).catch( error => { console.log('failed', error) });

    e.preventDefault();
    console.log(cookingForm)
    }, [cookingForm]
  )

  const onCookingName = useCallback((e)=>{
    e.preventDefault();
    setCookingForm({
      ...cookingForm,
      name: e.target.value
    });
    console.log(cookingForm)
  }, [cookingForm])

  const onCookingUrl = useCallback((e)=>{
    e.preventDefault();
    setCookingForm({
      ...cookingForm,
      img: e.target.value
    });
    console.log(cookingForm)
  }, [cookingForm])

  const onChangeInput = useCallback(()=>{
    
  })

  // const onAddOption = useCallback((e)=>{
  //   e.preventDefault();
  // })

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
                <input type="text" onChange={onCookingName} />
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="">요리사진 URL</label>
              </dt>
              <dd>
                <input type="text" onChange={onCookingUrl} />
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
              {
                baseOption
                ? 
                selectOptionArr.meat.map((item, index)=> {
                  return (
                    item.selfInput
                    ? <CookingCustomOption key={index} />
                    : <CookingSelectOption selectedOption={baseOption.meat} group={'meat'} selectOptionArr={selectOptionArr} setSelectOptionArr={setSelectOptionArr} key={index} />
                  )
                })
                : null
              }
            </dl>
            <CookingMoreOption />
          </li>
          <li>
            <dl>
              <dt>
                어류
              </dt>
              {
                baseOption
                ? <CookingSelectOption selectedOption={baseOption.misc} />
                : null
              }
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
          <button type="submit" className="CookingForm__button CookingForm__button--submit" onClick={onCookingCreate}>요리추가</button>
          <button type="submit" className="CookingForm__button CookingForm__button--edit">요리수정</button>
          <button type="submit" className="CookingForm__button CookingForm__button--remove">요리삭제</button>
        </div>
      </form>
    </div>
  );
};



const CookingCustomOption = (props) => {
  
  return(
    <dd className="CookingForm__option">
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
  )
}

const CookingMoreOption = (props) => {
  return(
    <div className="CookingForm__more">
      <button className="CookingForm__optionButton CookingForm__optionButton--add">+ 추가</button>
    </div>
  )
}

export default CookingForm;