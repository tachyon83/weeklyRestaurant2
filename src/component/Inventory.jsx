import React, { useEffect, useState } from "react";
import axios from 'axios';
import InventoryItem from './InventoryItem'
const host = require("../host");

const Inventory = () => {
  const [ingredient, setIngredient] = useState(null);

  useEffect(()=>{
    axios.get(`${host.server}/storage/check`).then((result) => {
      setIngredient(result.data);
    }).catch( error => { console.log('failed', error) });
  }, [])


  return (
    <div className="LineBox">
      <h2>재고 현황</h2>
      <div className="Inventory">
        <dl>
            <dt className="Inventory__category">육류</dt>
            <dd className="Inventory__ingredient">
                {ingredient && (
                    ingredient.meats.map((item, i)=>{
                      return(
                        <InventoryItem ingredient={item} key={i} />
                      )
                    })
                )}
            </dd>
        </dl>
        <dl>
            <dt className="Inventory__category">어류</dt>
            <dd className="Inventory__ingredient">
                {ingredient && (
                    ingredient.fishes.map((item, i)=>{
                      return(
                        <InventoryItem ingredient={item} key={i} />
                      )
                    })
                )}
            </dd>
        </dl>
        <dl>
            <dt className="Inventory__category">부재료</dt>
            <dd className="Inventory__ingredient">
                {ingredient && (
                    ingredient.miscs.map((item, i)=>{
                      return(
                        <InventoryItem ingredient={item} key={i} />
                      )
                    })
                )}
            </dd>
        </dl>
        <dl>
            <dt className="Inventory__category">양념(소스)</dt>
            <dd className="Inventory__ingredient">
                {ingredient && (
                    ingredient.sauces.map((item, i)=>{
                      return(
                        <InventoryItem ingredient={item} key={i} />
                      )
                    })
                )}
            </dd>
        </dl>
      </div>
    </div>
  );
};

export default Inventory;
