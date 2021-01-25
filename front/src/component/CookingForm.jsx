import React, { useCallback, useState, useEffect } from "react";
import axios from 'axios';
import CookingFormSelectOption from './CookingFormSelectOption';
import CookingFormCustomOption from './CookingFormCustomOption';

const host = require("../host");

const CookingForm = (props) => {

  useEffect(() => {
    axios.get(`${host.server}/recipe/new`, {
      withCredentials: true
    }).then((result) => {
      console.log(result.data.data)
      setBaseOption(result.data.data)
    }).catch((error)=>{console.log('failed', error)})
  }, [])

  const [cookingForm, setCookingForm] = useState({
    id: null,
    name: null,
    style: null,
    img: null,
    contents: {
      meat: {
        id: null,
        name: null,
        contents: [],
      },
      fish: {
        id: null,
        name: null,
        contents: [],
      },
      misc: {
        id: null,
        name: null,
        contents: [],
      },
      sauce: {
        id: null,
        name: null,
        contents: [],
      }
    }
  });

  const [baseOption, setBaseOption] = useState();
  const [handleValue, setHandleValue] = useState([]);

  const [categoryOptionArr, setCategoryOptionArr] = useState({
    meat: [],
    fish: [],
    misc: [],
    sauce: [],
  });


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

  const onChangeInput = useCallback((e)=>{
    setCookingForm({
      ...cookingForm,
      [e.target.name]: e.target.value,
      contents: {
        meat: {
          id: null,
          name: null,
          contents: [null],
        },
        fish: {
          id: null,
          name: null,
          contents: [null],
        },
        misc: {
          id: null,
          name: null,
          contents: [null],
        },
        sauce: {
          id: null,
          name: null,
          contents: [null],
        }
      }
    })
  })

  useEffect(() => {
    console.log(cookingForm)
  }, [cookingForm])

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
                <input type="text" name="name" onChange={onChangeInput} value={cookingForm.name} />
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="">요리사진 URL</label>
              </dt>
              <dd>
                <input type="text" name="img" onChange={onChangeInput} value={cookingForm.img}  />
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
                categoryOptionArr.meat.map((item, index)=> {
                  return (
                    item.selfInput
                    ? <CookingFormCustomOption
                        group={'meat'} 
                        categoryOptionArr={categoryOptionArr}
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                    : <CookingFormSelectOption 
                        baseOption={baseOption.meat} 
                        group={'meat'} 
                        categoryOptionArr={categoryOptionArr} 
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                  )
                })
                : null
              }
            </dl>
            <CookingMoreOption setCookingForm={setCookingForm} cookingForm={cookingForm} group={'meat'} categoryOptionArr={categoryOptionArr}  setCategoryOptionArr={setCategoryOptionArr} />
          </li>
          <li>
            <dl>
              <dt>
                어류
              </dt>
              {
                baseOption
                ? 
                categoryOptionArr.fish.map((item, index)=> {
                  return (
                    item.selfInput
                    ? <CookingFormCustomOption
                        group={'fish'} 
                        categoryOptionArr={categoryOptionArr}
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                    : <CookingFormSelectOption 
                        baseOption={baseOption.fish} 
                        group={'fish'} 
                        categoryOptionArr={categoryOptionArr} 
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                  )
                })
                : null
              }
            </dl>
            <CookingMoreOption setCookingForm={setCookingForm} cookingForm={cookingForm} group={'fish'} categoryOptionArr={categoryOptionArr}  setCategoryOptionArr={setCategoryOptionArr} />
          </li>
          <li>
            <dl>
              <dt>
                부재료
              </dt>
              {
                baseOption
                ? 
                categoryOptionArr.misc.map((item, index)=> {
                  return (
                    item.selfInput
                    ? <CookingFormCustomOption
                        group={'misc'} 
                        categoryOptionArr={categoryOptionArr}
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                    : <CookingFormSelectOption 
                        baseOption={baseOption.misc} 
                        group={'misc'} 
                        categoryOptionArr={categoryOptionArr} 
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                  )
                })
                : null
              }
            </dl>
            <CookingMoreOption setCookingForm={setCookingForm} cookingForm={cookingForm} group={'misc'} categoryOptionArr={categoryOptionArr}  setCategoryOptionArr={setCategoryOptionArr} />
          </li>
          <li>
            <dl>
              <dt>
                소스(양념)
              </dt>
              {
                baseOption
                ? 
                categoryOptionArr.sauce.map((item, index)=> {
                  return (
                    item.selfInput
                    ? <CookingFormCustomOption
                        group={'sauce'} 
                        categoryOptionArr={categoryOptionArr}
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                    : <CookingFormSelectOption 
                        baseOption={baseOption.sauce} 
                        group={'sauce'} 
                        categoryOptionArr={categoryOptionArr} 
                        setCategoryOptionArr={setCategoryOptionArr} 
                        cookingForm={cookingForm}
                        setCookingForm={setCookingForm}
                        index={index}
                        key={index} 
                        handleValue={handleValue} 
                        setHandleValue={setHandleValue}
                      />
                  )
                })
                : null
              }
            </dl>
            <CookingMoreOption setCookingForm={setCookingForm} cookingForm={cookingForm} group={'sauce'} categoryOptionArr={categoryOptionArr}  setCategoryOptionArr={setCategoryOptionArr} />
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


const CookingMoreOption = ({cookingForm,setCookingForm,setCategoryOptionArr, categoryOptionArr, group}) => {
  const handleMore = useCallback((e)=>{
    e.preventDefault()
    const optionArr = JSON.parse(JSON.stringify( categoryOptionArr ));
    optionArr[group].push({selfInput : false})

    setCategoryOptionArr(optionArr);
    setCookingForm({
      ...cookingForm,
      contents: {
        ...cookingForm.contents,
        [group]: {
          ...cookingForm.contents[group],
          contents: [
            ...cookingForm.contents[group].contents, {
              name: null,
              amount: null,
              unit: null,
            }
          ]
        }
      }
    })
  }, [categoryOptionArr, setCategoryOptionArr])

  useEffect(() => {
    // console.log(categoryOptionArr)
  }, [categoryOptionArr])

  return(
    <div className="CookingForm__more">
      <button className="CookingForm__optionButton CookingForm__optionButton--add" onClick={handleMore}>+ 추가</button>
    </div>
  )
}

export default CookingForm;