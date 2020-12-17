import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import InventoryItem from './InventoryItem'
const host = require("../host");

const CookingDetail = () => {

    let { cookingId } = useParams();


    const [cookingDetail, setCookingDetail] = useState()

    useEffect(()=> {
        handleDetail()
    }, [])

    const handleDetail = useCallback(() => {
    axios.get(`${host.server}/recipe/${cookingId}`).then((result) => {
        console.log(result)
        setCookingDetail(result.data);
    }).catch( error => { console.log('failed', error) });
    }, []);

    return (
        <>
            {cookingDetail && (
                <div className="LineBox">
                    <h2>요리 상세</h2>
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
                                {
                                    cookingDetail.ingredients.contents.meats ? (
                                        cookingDetail.ingredients.contents.meats.contents.map((item, i)=>{
                                        return(
                                            <InventoryItem ingredient={item} key={i} />
                                        )})
                                    ) : null
                                }
                            </dl>
                            <dl>
                                <dt className="CookingDetail__category">어류</dt>
                                {
                                    cookingDetail.ingredients.contents.fishes ? (
                                        cookingDetail.ingredients.contents.fishes.contents.map((item, i)=>{
                                        return(
                                            <InventoryItem ingredient={item} key={i} />
                                        )})
                                    ) : null
                                }
                            </dl>
                            <dl>
                                <dt className="CookingDetail__category">부재료</dt>
                                {
                                    cookingDetail.ingredients.contents.miscs ? (
                                        cookingDetail.ingredients.contents.miscs.contents.map((item, i)=>{
                                        return(
                                            <InventoryItem ingredient={item} key={i} />
                                        )})
                                    ) : null
                                }
                            </dl>
                            <dl>
                                <dt className="CookingDetail__category">양념(소스)</dt>
                                {
                                    cookingDetail.ingredients.contents.sauces ? (
                                        cookingDetail.ingredients.contents.sauces.contents.map((item, i)=>{
                                        return(
                                            <InventoryItem ingredient={item} key={i} />
                                        )})
                                    ) : null
                                }
                            </dl>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookingDetail;
