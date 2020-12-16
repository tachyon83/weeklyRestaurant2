import React from 'react';

const CookingListItem = (props) => {
    const {name, img} = props.cookingList.contents;
    return(
        <li className="CookingList__dishItem DishItem">
            <div className="DishItem__thumb">
                <img
                    src={img}
                />
            </div>
            <div className="DishItem__desc">
                <div className="DishItem__title">{name}</div>
                {/* <button className="DishItem__button DishItem__button--add">
                    + 추가하기
                </button> */}
            </div>
        </li>
    )
};

export default CookingListItem;