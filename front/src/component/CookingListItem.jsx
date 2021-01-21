import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = require("../host");

const CookingListItem = (props) => {
    const {name, img} = props.cookingList;
    const id = props.cookingList.id;
    const popup = props.popup
    const setIsListPopup = props.setIsListPopup;
    const setIsDetailPopup = props.setIsDetailPopup;
    const setPopupCookingId = props.setPopupCookingId;
    const {popupCookingId, calendarSelectData, calendarPlan} = props;

    console.log(popupCookingId, calendarSelectData, calendarPlan)

    const handlePopupControl = useCallback(
        () => {
            setIsListPopup(prevState => false);
            setIsDetailPopup(prevState => true);
            setPopupCookingId(prevState => id);
        },
        [setIsListPopup, setIsDetailPopup, setPopupCookingId],
    )

    const handleCanlendarPlan = useCallback(()=>{
        setIsListPopup(prevState => false);
        setPopupCookingId(prevState => id);

        let planArr = [...calendarPlan];

        planArr[calendarSelectData.planWeek][calendarSelectData.planEatTime] = popupCookingId;

        axios.put(`${host.server}/plan`,{
            year: calendarSelectData.year,
            week: calendarSelectData.week,
            plan: planArr
        },{
            withCredentials: true
        }).then((result) => {
            console.log(result)
        }).catch(error => { console.log('failed', error) })
    })

    return(
        <li className="CookingList__dishItem DishItem">
            <div className="DishItem__thumb">

                {
                    popup 
                    ? (
                        <img src={img} onClick={handlePopupControl} />
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
                    <button className="DishItem__button DishItem__button--add" onClick={handleCanlendarPlan}>
                        + 추가하기
                    </button>
                    )
                }
            </div>
        </li>
    )
};

export default CookingListItem;