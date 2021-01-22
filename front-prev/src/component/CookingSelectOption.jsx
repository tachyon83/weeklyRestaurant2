import React, {useCallback} from "react";

const CookingSelectOption = ({selectedOption, selectOptionArr, setSelectOptionArr, group}) => {
    console.log(selectedOption, group)

    const onSelfInput = useCallback(()=>{
        
        setSelectOptionArr({
            ...selectOptionArr,
            // [group][0].selfInput : true
        })
    }, [setSelectOptionArr])

    return(
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
          <button className="CookingForm__optionButton" onClick={onSelfInput}>직접입력</button>
        </div>
      </dd>
    )
  }

export default CookingSelectOption;