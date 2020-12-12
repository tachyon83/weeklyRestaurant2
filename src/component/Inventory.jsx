import React from "react";

const Inventory = (props) => {
  return (
    <div className="Inventory">
      <h2>재고 현황</h2>
      <div className="Inventory__wrap">
        <dl>
            <dt className="Inventory__category">육류</dt>
            <dd className="Inventory__ingredient">
                <div className="Ingredient">
                    <div className="Ingredient__title">돼지고기</div>
                    <div className="Ingredient__count">150</div>
                    <div className="Ingredient__unit">g</div>
                </div>
            </dd>
        </dl>
        <dl>
            <dt className="Inventory__category">어류</dt>
            <dd className="Inventory__ingredient">
                <div className="Ingredient">
                    <div className="Ingredient__title">멸치</div>
                    <div className="Ingredient__count">30</div>
                    <div className="Ingredient__unit">g</div>
                </div>
            </dd>
        </dl>
        <dl>
            <dt className="Inventory__category">부재료</dt>
            <dd className="Inventory__ingredient">
                <div className="Ingredient">
                    <div className="Ingredient__title">김치</div>
                    <div className="Ingredient__count">200</div>
                    <div className="Ingredient__unit">g</div>
                </div>
            </dd>
        </dl>
        <dl>
            <dt className="Inventory__category">양념(소스)</dt>
            <dd className="Inventory__ingredient">
                <div className="Ingredient">
                    <div className="Ingredient__title">간장</div>
                    <div className="Ingredient__count">2</div>
                    <div className="Ingredient__unit">큰술</div>
                </div>
                <div className="Ingredient">
                    <div className="Ingredient__title">다진마늘</div>
                    <div className="Ingredient__count">1</div>
                    <div className="Ingredient__unit">큰술</div>
                </div>
            </dd>
        </dl>
      </div>
    </div>
  );
};

export default Inventory;
