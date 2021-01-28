import React, {useCallback,useEffect,useState} from "react";

const CookingFormCustomOption = ({categoryOptionArr, setCategoryOptionArr, group, index}) => {
  
    const [optionArr, setOptionArr] = useState();
  
    const callbackOptionFuntion = useCallback((group, index) =>{
      const copyArr = JSON.parse(JSON.stringify( categoryOptionArr ));
      copyArr[group][index].selfInput = false;
      setOptionArr(copyArr)
    }, [categoryOptionArr])
  
    const handleSelfInput = useCallback((e)=>{
      e.preventDefault();
      setCategoryOptionArr(optionArr)
    }, [optionArr])
  
    useEffect(() => {
      callbackOptionFuntion(group, index)
    }, [categoryOptionArr])
  
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
          <button className="CookingForm__optionButton" onClick={handleSelfInput}>선택입력</button>
        </div>
      </dd>
      
    )
  }

  export default CookingFormCustomOption;