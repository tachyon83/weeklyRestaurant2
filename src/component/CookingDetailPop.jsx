import React, {useCallback} from 'react';

const CookingDetailPop = ({setIsDetailPopup}) => {
    const handleCloseDetail = useCallback(
        () => {
            setIsDetailPopup(false)
        },
        [],
    )
    return(
        <article className="LayoutPopup">
            <div className="LayoutPopup__header">
                <h2 className="LayoutPopup__title">상세보기</h2>
                <button className="LayoutPopup__close" onClick={handleCloseDetail}><i className="fas fa-times"></i><i className="ir">닫기</i></button>
            </div>
            <div className="CookingDetail">
                <div className="CookingDetail__top">
                    <div className="CookingDetail__desc">
                        <div className="CookingDetail__title">김치찌개</div>
                        <div className="CookingDetail__imgUrl">
                            <span>이미지 URL</span>
                            <p>https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576</p>
                        </div>
                        <div className="CookingDetail__buttonWrap">
                            <button className="CookingDetail__button CookingDetail__button--edit">수정하기</button>
                            <button className="CookingDetail__button CookingDetail__button--delete">삭제</button>
                        </div>
                    </div>
                    <div className="CookingDetail__thumb">
                        <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                    </div>
                </div>
                <div className="CookingDetail__ingredient">
                    <dl>
                        <dt className="CookingDetail__category">육류</dt>
                        <dd className="Ingredient">
                            <div className="Ingredient__title">돼지고기</div>
                            <div className="Ingredient__count">150</div>
                            <div className="Ingredient__unit">g</div>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="CookingDetail__category">어류</dt>
                        <dd className="Ingredient">
                            <div className="Ingredient__title">멸치</div>
                            <div className="Ingredient__count">30</div>
                            <div className="Ingredient__unit">g</div>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="CookingDetail__category">부재료</dt>
                        <dd className="Ingredient">
                            <div className="Ingredient__title">김치</div>
                            <div className="Ingredient__count">200</div>
                            <div className="Ingredient__unit">g</div>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="CookingDetail__category">양념(소스)</dt>
                        <dd className="Ingredient">
                            <div className="Ingredient__title">간장</div>
                            <div className="Ingredient__count">2</div>
                            <div className="Ingredient__unit">큰술</div>
                        </dd>
                        <dd className="Ingredient">
                            <div className="Ingredient__title">다진마늘</div>
                            <div className="Ingredient__count">1</div>
                            <div className="Ingredient__unit">큰술</div>
                        </dd>
                    </dl>
                </div>
            </div>
        </article>
    )
};

export default CookingDetailPop;