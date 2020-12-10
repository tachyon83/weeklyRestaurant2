import React from 'react';

const CookingList = (props) => {
    return(
        <article className="LayoutPopup">
            <div className="LayoutPopup__header">
                <h2 className="LayoutPopup__title">요리 목록</h2>
                <button className="LayoutPopup__close"><i class="fas fa-times"></i><i className="ir">닫기</i></button>
            </div>
            <div className="CookingList">
                <ul className="CookingList__tab">
                    <li className="CookingList__tabItem CookingList__tabItem--active">한식</li>
                    <li className="CookingList__tabItem">중식</li>
                    <li className="CookingList__tabItem">양식</li>
                    <li className="CookingList__tabItem">일식</li>
                </ul>
                <ul className="CookingList__dishList">
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                    <li className="CookingList__dishItem DishItem">
                        <div className="DishItem__thumb">
                            <img src="https://static.wtable.co.kr/image/production/service/recipe/291/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg?size=1024x576" alt=""/>
                        </div>
                        <div className="DishItem__desc">
                            <div className="DishItem__title">김치찌개</div>
                            <button className="DishItem__button DishItem__button--add">+ 추가하기</button>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    )
};

export default CookingList;