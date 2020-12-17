import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
const host = require("../host");

const CookingListItem = (props) => {
    const {name, img} = props.cookingList.contents;
    const id = props.cookingList.id;
    let { url } = useRouteMatch();

    return(
        <li className="CookingList__dishItem DishItem">
            <div className="DishItem__thumb">
                <Link to={`${url}/${id}`}>
                    <img
                        src={img}
                    />
                </Link>
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