import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';

const CookingListItem = (props) => {
    const {name, img} = props.cookingList.contents;
    const id = props.cookingList.id;
    const popup = props.popup
    const setIsListPopup = props.setIsListPopup;
    const setIsDetailPopup = props.setIsDetailPopup;
    const setPopupCookingId = props.setPopupCookingId;

    const handleCloseList = useCallback(
        () => {
            setIsListPopup(prevState => false);
            setIsDetailPopup(prevState => true);
            setPopupCookingId(prevState => id);
        },
        [],
    )

    return(
        <li className="CookingList__dishItem DishItem">
            <div className="DishItem__thumb">

                {
                    popup 
                    ? (
                        <img src={img} onClick={handleCloseList} />
                    ) : (
                        <Link to={`/cookingList/${id}`}>
                            <img
                                src={img}
                            />
                        </Link>
                    )
                }
            </div>
            <div className="DishItem__desc">
                <div className="DishItem__title">{name}</div>
                { popup && (
                    <button className="DishItem__button DishItem__button--add">
                        + 추가하기
                    </button>
                    )
                }
            </div>
        </li>
    )
};

export default CookingListItem;