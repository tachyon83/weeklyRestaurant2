import React, {useCallback,useEffect,useState} from "react";

const CookingFormSelectOption = ({targetCategory,setTargetCategory,handleValue, setHandleValue, baseOption, categoryOptionArr, cookingForm, setCookingForm, setCategoryOptionArr, group, index}) => {
  // 추가 버튼 클릭 후 categoryOptionArr 변경되면 시작
  useEffect(() => {
    initAdd() // 배열 기본 init 값 생성
    callbackOptionFuntion(group, index); // 목록에 직접입력/선택입력 옵션 추가
  }, [categoryOptionArr])

  // 처음 생성시 배열 기본 init 값 생성 -> handelValue 에 전달
  const initAdd = useCallback(()=>{
    if(targetCategory){
      const copyArr = JSON.parse(JSON.stringify(cookingForm.contents[targetCategory].contents));
      copyArr[index] = {
        name: Object.keys(baseOption[0])[0],
        amount: null,
        unit: baseOption[0][Object.keys(baseOption[0])],
      };
      console.log(copyArr, `${targetCategory}기본 생성값 추가!`)
      setHandleValue(copyArr)
    }
  }, [baseOption])

  
  // 목록 직접입력/선택입력 옵션 스위치
  const [optionArr, setOptionArr] = useState();

  const callbackOptionFuntion = useCallback((group, index) =>{
    const copyArr = JSON.parse(JSON.stringify( categoryOptionArr ));
    copyArr[group][index].selfInput = true;
    setOptionArr(copyArr)
  }, [categoryOptionArr])

  const handleSelfInput = useCallback((e)=>{
    e.preventDefault();
    setCategoryOptionArr(optionArr)
  }, [optionArr])


  // 현재 선택 셀렉트박스
  const [selectedKey, setSelectedKey] = useState({
    key: Object.keys(baseOption[0]),
    index: 0,
  });


  // select 박스 변경시
  // handleValue 에 전달하기전 targetCategory 기다린 후 전달
  const [handleValueArr, setHandleValueArr] = useState(); 
  
  useEffect(() => {
    if(handleValueArr){
      setHandleValue(handleValueArr)
    }
  }, [targetCategory])

  const handleInput = useCallback((e)=>{
    e.preventDefault();
    
    const copyArr = JSON.parse(JSON.stringify(cookingForm.contents[group].contents));
    

    copyArr[index].name = e.currentTarget.value;
    copyArr[index].unit = baseOption[e.currentTarget.selectedIndex][e.currentTarget.value];

    console.log(copyArr,'handleValue change, selectbox change', group, 'category')
    
    setTargetCategory(group)
    setHandleValueArr(copyArr)

    // 현재 선택 셀렉트박스
    setSelectedKey({
      key: e.currentTarget.value,
      index: e.currentTarget.selectedIndex,
    })
  }, [cookingForm, group, baseOption, index])



  // useEffect(() => {
  //   console.log(handleValue, 'handleValue',group )
  //   setCookingForm({
  //     ...cookingForm,
  //     contents: {
  //       ...cookingForm.contents,
  //       [group]: {
  //         id: null,
  //         name: null,
  //         contents: handleValue
  //       }
  //     }
  //   })
  // }, [handleValue, group])


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