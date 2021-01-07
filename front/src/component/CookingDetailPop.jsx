import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import InventoryItem from './InventoryItem'
const host = require("../host");


const CookingDetailPop = ({ setIsDetailPopup, popupCookingId = 1134 }) => {
    const handleCloseDetail = useCallback(
        () => {
            setIsDetailPopup(false)
        })

    const [cookingDetail, setCookingDetail] = useState()

    console.log(cookingDetail, popupCookingId)

    useEffect(() => {
        handleDetail()
    }, [])

    const handleDetail = useCallback(() => {
        axios.get(`${host.server}/recipe/${popupCookingId}`).then((result) => {
            setCookingDetail(result.data);
        }).catch(error => { console.log('failed', error) });
    }, []);

    return (
        <>
            {cookingDetail && (

                <article className="LayoutPopup">
                    <div className="LayoutPopup__header">
                        <h2 className="LayoutPopup__title">상세보기 {popupCookingId}</h2>
                        <button className="LayoutPopup__close" onClick={handleCloseDetail}><i className="fas fa-times"></i><i className="ir">닫기</i></button>
                    </div>
                    <div className="CookingDetail">
                        <div className="CookingDetail__top">
                            <div className="CookingDetail__desc">
                                <div className="CookingDetail__title">{cookingDetail.contents.name}</div>
                                <div className="CookingDetail__imgUrl">
                                    <span>이미지 URL</span>
                                    <p>{cookingDetail.contents.img}</p>
                                </div>
                                <div className="CookingDetail__buttonWrap">
                                    <button className="CookingDetail__button CookingDetail__button--edit">수정하기</button>
                                    <button className="CookingDetail__button CookingDetail__button--delete">삭제</button>
                                </div>
                            </div>
                            <div className="CookingDetail__thumb">
                                <img src={cookingDetail.contents.img} alt="" />
                            </div>
                        </div>
                        <div className="CookingDetail__ingredient">
                            <dl>
                                <dt className="CookingDetail__category">육류</dt>
                                <dd>
                                    {
                                        cookingDetail.ingredients.contents.meats ? (
                                            cookingDetail.ingredients.contents.meats.contents.map((item, i) => {
                                                return (
                                                    <InventoryItem ingredient={item} key={i} />
                                                )
                                            })
                                        ) : null
                                    }
                                </dd>
                            </dl>
                            <dl>
                                <dt className="CookingDetail__category">어류</dt>
                                <dd>
                                    {
                                        cookingDetail.ingredients.contents.fishes ? (
                                            cookingDetail.ingredients.contents.fishes.contents.map((item, i) => {
                                                return (
                                                    <InventoryItem ingredient={item} key={i} />
                                                )
                                            })
                                        ) : null
                                    }
                                </dd>
                            </dl>
                            <dl>
                                <dt className="CookingDetail__category">부재료</dt>
                                <dd>
                                    {
                                        cookingDetail.ingredients.contents.miscs ? (
                                            cookingDetail.ingredients.contents.miscs.contents.map((item, i) => {
                                                return (
                                                    <InventoryItem ingredient={item} key={i} />
                                                )
                                            })
                                        ) : null
                                    }
                                </dd>
                            </dl>
                            <dl>
                                <dt className="CookingDetail__category">양념(소스)</dt>
                                <dd>
                                    {
                                        cookingDetail.ingredients.contents.sauces ? (
                                            cookingDetail.ingredients.contents.sauces.contents.map((item, i) => {
                                                return (
                                                    <InventoryItem ingredient={item} key={i} />
                                                )
                                            })
                                        ) : null
                                    }
                                </dd>
                            </dl>
                        </div>
                    </div>
                </article>

            )}
        </>
    )
};

export default CookingDetailPop;