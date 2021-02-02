import React, {useCallback,useEffect,useState} from "react";

const CookingFormSelectOption = ({targetCategory,setTargetCategory,handleValue, setHandleValue, baseOption, categoryOptionArr, cookingForm, setCookingForm, setCategoryOptionArr, group, index}) => {

  // 목록 직접입력/선택입력 옵션 스위치
  const handleSelfInput = useCallback((e)=>{
    e.preventDefault();
    
    // 직접입력, 선택입력 옵션설정
    const copyArr = {...categoryOptionArr}
    copyArr[group][index].selfInput = true;
    setCategoryOptionArr(copyArr);

    // handlevalue 컨트롤
    const cookingArr = {...cookingForm.contents[group].contents}
    cookingArr[index] = {
      name: null,
      amount: 0,
      unit: null,
    }
    console.log(cookingArr, 'cookingArr 직접입력 변경 기본값')

    setHandleValue({
      targetCategory: group,
      contents: cookingArr
    })
  }, [categoryOptionArr, cookingForm, group, index])


  // 현재 선택 셀렉트박스
  const [selectedKey, setSelectedKey] = useState({
    key: Object.keys(baseOption[0]),
    index: 0,
  });

  const handleSelect = useCallback((e)=>{
    e.preventDefault();

    const copyArr = {...cookingForm.contents[group].contents}

    copyArr[index].name = e.currentTarget.value;
    copyArr[index].unit = baseOption[e.currentTarget.selectedIndex][e.currentTarget.value];

    console.log(copyArr,'selectbox change -> handleValue change', group, 'category')
    
    setHandleValue({
      targetCategory: group,
      contents: copyArr
    })

    // 현재 선택 셀렉트박스
    setSelectedKey({
      key: e.currentTarget.value,
      index: e.currentTarget.selectedIndex,
    })
  }, [cookingForm, group, baseOption, index])

  const handleInput = useCallback((e)=>{
    e.preventDefault();

    const copyArr = {...cookingForm.contents[group].contents}
    copyArr[index].amount = e.target.value;

    setHandleValue({
      targetCategory: group,
      contents: copyArr
    })
  }, [index, group, cookingForm])

    return(
      <dd>
        <div className="CookingForm__section01">
          <select name="name" id="" onChange={handleSelect}>
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
          {
            cookingForm.contents[group].contents[index]
            ? <input name="amount" type="number" onChange={handleInput} value={cookingForm.contents[group].contents[index].amount} />
            : <input name="amount" type="number" onChange={handleInput} value="" />
          }
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