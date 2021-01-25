import e from 'cors';
import React, {useCallback,useEffect,useState} from "react";

const CookingFormSelectOption = ({handleValue, setHandleValue, baseOption, categoryOptionArr, cookingForm, setCookingForm, setCategoryOptionArr, group, index}) => {

  const [optionArr, setOptionArr] = useState();
  const [selectedKey, setSelectedKey] = useState({
    key: Object.keys(baseOption[0]),
    index: 0,
  });

  const callbackOptionFuntion = useCallback((group, index) =>{
    const copyArr = JSON.parse(JSON.stringify( categoryOptionArr ));
    copyArr[group][index].selfInput = true;
    setOptionArr(copyArr)
  }, [categoryOptionArr])

  const handleSelfInput = useCallback((e)=>{
    e.preventDefault();
    setCategoryOptionArr(optionArr)
  }, [optionArr])

  useEffect(() => {
    callbackOptionFuntion(group, index)
  }, [categoryOptionArr])

  const handleInput = useCallback((e)=>{
    // 배열만들기
    e.preventDefault();

    const copyArr = JSON.parse(JSON.stringify(cookingForm.contents[group].contents));
    copyArr[index] = {
      name: copyArr[index].name,
      amount: copyArr[index].amount,
      unit: baseOption[e.currentTarget.selectedIndex][e.currentTarget.value],
      [e.currentTarget.name] : e.currentTarget.value,
    };
    setHandleValue(copyArr)

    setSelectedKey({
      key: e.currentTarget.value,
      index: e.currentTarget.selectedIndex,
    })
  }, [])

  useEffect(() => {
    setCookingForm({
      ...cookingForm,
      contents: {
        ...cookingForm.contents,
        [group]: {
          id: null,
          name: null,
          contents: handleValue
        }
      }
    })
  }, [handleValue])


    return(
      <dd>
        <div className="CookingForm__section01">
          <select name="name" id="" onChange={handleInput}>
            {
              baseOption.map((item, index)=>{
                return (
                  <option value={Object.keys(item)[0]} key={index}>{Object.keys(item)[0]}</option>
                )
              })
            }
          </select>
        </div>
        <div className="CookingForm__section02">
        <input name="amount" type="text" onChange={handleInput} />
          {/* {
            cookingForm.contents[group].contents[index].amount
            ? <input name="amount" type="text" onChange={handleInput} value={cookingForm.contents[group].contents[index].amount} />
            : null
          } */}
        </div>
        <div className="CookingForm__section03">
          {
            baseOption[selectedKey.index][selectedKey.key]
          }
        </div>
        <div className="CookingForm__section04">
          <button className="CookingForm__optionButton" onClick={handleSelfInput}>직접입력</button>
        </div>
      </dd>
    )
  }

export default CookingFormSelectOption;