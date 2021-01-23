import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import InventoryItem from './InventoryItem';
import InventoryPopup from './InventoryPopup';
const host = require("../host");

const Inventory = () => {
  const [ingredient, setIngredient] = useState(null);
  const [inventoryPopupShow, setInventoryPopupShow] = useState(false);
  const [inventoryPopupInfo, setInventoryPopupInfo] = useState({
    title: null,
    category: null,
  })

  useEffect(() => {
    axios.get(`${host.server}/inventory`, {
      withCredentials: true
    }).then((result) => {
      setIngredient(result.data.data);
    }).catch(error => { console.log('failed', error) });
  }, [])

  const onPopupShow = useCallback((e) => {
    setInventoryPopupShow(true)
    setInventoryPopupInfo({
      title: e.currentTarget.dataset.title,
      category: e.currentTarget.dataset.category
    })
  }, [])

  return (
    <>
      {ingredient && (
        <div className="LineBox">
          <h2>재고 현황</h2>
          <div className="Inventory">
            {inventoryPopupShow && <InventoryPopup inventoryPopupInfo={inventoryPopupInfo} setInventoryPopupShow={setInventoryPopupShow} ingredient={ingredient} setIngredient={setIngredient} />}
            <dl>
              <dt className="Inventory__category">
                육류
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="meat" data-title="육류"><i className="far fa-plus-square"></i></button>
              </dt>
              <dd className="Inventory__ingredient">
                {
                  ingredient.meat.map((item, i) => {
                    return (
                      <InventoryItem ingredient={item} key={i} />
                    )
                  })
                }
              </dd>
            </dl>
            <dl>
              <dt className="Inventory__category">
                어류
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="fish" data-title="어류"><i className="far fa-plus-square"></i></button>
              </dt>
              <dd className="Inventory__ingredient">
                {
                  ingredient.fish.map((item, i) => {
                    return (
                      <InventoryItem ingredient={item} key={i} />
                    )
                  })
                }
              </dd>
            </dl>
            <dl>
              <dt className="Inventory__category">
                부재료
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="misc" data-title="부재료"><i className="far fa-plus-square"></i></button>
              </dt>
              <dd className="Inventory__ingredient">
                {
                  ingredient.misc.map((item, i) => {
                    return (
                      <InventoryItem ingredient={item} key={i} />
                    )
                  })
                }
              </dd>
            </dl>
            <dl>
              <dt className="Inventory__category">
                양념(소스)
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="sauce" data-title="양념(소스)"><i className="far fa-plus-square"></i></button>
              </dt>
              <dd className="Inventory__ingredient">
                {
                  ingredient.sauce.map((item, i) => {
                    return (
                      <InventoryItem ingredient={item} key={i} />
                    )
                  })
                }
              </dd>
            </dl>
          </div>
        </div>

      )}
    </>
  );
};

export default Inventory;
