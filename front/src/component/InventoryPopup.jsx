import React, {useCallback} from 'react';

const InventoryPopup = (props) => {
    const {title, setInventoryPopupShow} = props;
    
    const closeInventoryPopup = useCallback(
        () => {
            setInventoryPopupShow({
                title : title,
                value : false
            })
        }
    )

    return (
        <div className="InventoryPopup">
            <div className="InventoryPopup__title">
                {title} 재고 추가
                <button className="InventoryPopup__close" onClick={closeInventoryPopup}><i className="fas fa-times"></i><i className="ir">닫기</i></button>
            </div>
            <div className="InventoryPopup__wrap">
                <div className="InventoryPopup__name">
                    <input type="text" placeholder="이름" />
                </div>
                <div className="InventoryPopup__amount">
                    <input type="text" placeholder="수량" />
                </div>
                <div className="InventoryPopup__unit">
                    <input type="text" placeholder="단위" />
                </div>
            </div>
            <div className="InventoryPopup__buttonArea">
                <button className="InventoryPopup__button InventoryPopup__button--add">추가하기</button>
            </div>
        </div>
    )
};

export default InventoryPopup;