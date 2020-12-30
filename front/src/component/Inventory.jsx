import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import InventoryItem from './InventoryItem';
import InventoryPopup from './InventoryPopup';
const host = require("../host");

const Inventory = () => {
  const [ingredient, setIngredient] = useState(null);
  const [inventoryPopupShow, setInventoryPopupShow] = useState({value: false, title: null});

  useEffect(()=>{
    axios.get(`${host.server}/storage/check`).then((result) => {
      setIngredient(result.data);
    }).catch( error => { console.log('failed', error) });
  }, [])

  const onPopupShow = useCallback((e)=>{
    setInventoryPopupShow({
      value : true,
      title : e.currentTarget.dataset.category,
    })
  })

  return (
    <>
      {ingredient && (
        <div className="LineBox">
          <h2>재고 현황</h2>
          <div className="Inventory">
            {inventoryPopupShow.value && <InventoryPopup title={inventoryPopupShow.title} setInventoryPopupShow={setInventoryPopupShow} />}
            <dl>
                <dt className="Inventory__category">
                  육류
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="육류"><i className="far fa-plus-square"></i></button>
                </dt>
                <dd className="Inventory__ingredient">
                    {
                      ingredient.meats.map((item, i)=>{
                        return(
                          <InventoryItem ingredient={item} key={i} />
                        )
                      })
                    }
                </dd>
            </dl>
            <dl>
                <dt className="Inventory__category">
                  어류
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="어류"><i className="far fa-plus-square"></i></button>
                </dt>
                <dd className="Inventory__ingredient">
                    {
                      ingredient.fishes.map((item, i)=>{
                        return(
                          <InventoryItem ingredient={item} key={i} />
                        )
                      })
                    }
                </dd>
            </dl>
            <dl>
                <dt className="Inventory__category">
                  부재료
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="부재료"><i className="far fa-plus-square"></i></button>
                </dt>
                <dd className="Inventory__ingredient">
                    {
                      ingredient.miscs.map((item, i)=>{
                        return(
                          <InventoryItem ingredient={item} key={i} />
                        )
                      })
                    }
                </dd>
            </dl>
            <dl>
                <dt className="Inventory__category">
                  양념(소스)
                  <button className="Inventory__addButton" onClick={onPopupShow} data-category="양념(소스)"><i className="far fa-plus-square"></i></button>
                </dt>
                <dd className="Inventory__ingredient">
                    {
                      ingredient.sauces.map((item, i)=>{
                        return(
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
