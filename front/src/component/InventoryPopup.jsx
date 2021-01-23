import React, {useCallback, useState} from 'react';
import axios from 'axios';
const host = require("../host");

const InventoryPopup = (props) => {
    const {inventoryPopupInfo, setInventoryPopupShow, ingredient, setIngredient} = props;
    const [inventoryInputValue, setInventoryInputValue] = useState({
        name: null,
        amount: null,
        unit: null
    });
    
    const handleCloseInventoryPopup = useCallback(
        () => {
            setInventoryPopupShow(false)
            setInventoryInputValue({
                name: null,
                amount: null,
                unit: null
            })
        }
    )

    const handleAddInventory = useCallback(()=>{
        
        const copyIngredient = JSON.parse(JSON.stringify(ingredient))
        copyIngredient.[inventoryPopupInfo.category].push(inventoryInputValue);

        axios.put(`${host.server}/inventory`, copyIngredient,{
            withCredentials: true
        }).then((result) => {
            console.log(result);
            setIngredient(copyIngredient);
            setInventoryPopupShow(false)
            setInventoryInputValue({
                name: null,
                amount: null,
                unit: null
            })
        }).catch(error => { console.log('failed', error) });
        
    })

    const handleAddInput = useCallback((e)=>{
        setInventoryInputValue({...inventoryInputValue, [e.target.name]: e.currentTarget.value})
    }, [inventoryInputValue])

    return (
        <div className="InventoryPopup">
            <div className="InventoryPopup__title">
                {inventoryPopupInfo.title} 재고 추가
                <button className="InventoryPopup__close" onClick={handleCloseInventoryPopup}><i className="fas fa-times"></i><i className="ir">닫기</i></button>
            </div>
            <div className="InventoryPopup__wrap">
                <div className="InventoryPopup__name">
                    <input type="text" placeholder="이름" name="name" onChange={handleAddInput} value={inventoryInputValue.name} />
                </div>
                <div className="InventoryPopup__amount">
                    <input type="text" placeholder="수량" name="amount" onChange={handleAddInput} value={inventoryInputValue.amount} />
                </div>
                <div className="InventoryPopup__unit">
                    <input type="text" placeholder="단위" name="unit" onChange={handleAddInput} value={inventoryInputValue.unit} />
                </div>
            </div>
            <div className="InventoryPopup__buttonArea">
                <button className="InventoryPopup__button InventoryPopup__button--add" onClick={handleAddInventory}>추가하기</button>
            </div>
        </div>
    )
};

export default InventoryPopup;