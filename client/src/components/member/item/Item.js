import React, { useState } from "react";
import axios from 'axios'
import uuid from "react-uuid";
import Digest from "../Digest";
import Ingredient from "../ingredient/Ingredient";
import { REMOVE_RECIPE, NEW_ORDER } from '../../../utils/context/action'
import { useStoreContext } from '../../../utils/context/GlobalState'
import './item.css'

const Item = () => {
  // console.log(`=====>`, state)
  const [state, dispatch] = useStoreContext()
  const [showDitail, setShowDitail] = useState(false)

  const submitOrder = (id, title, image, price) => {
    const order = {
      id,
      title,
      image,
      price,
    };
    axios.post('/api/order', order).then((res) => {
      dispatch({ type: NEW_ORDER, payload: res.data });
    });
  };

  return (
    <div className='allItems'>
      {state.recipe !== [] && state.recipe[0].map((Items) => (
        <>

          {showDitail && (
            <h1
              style={{
                marginBottom: "0",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "8px 10px 20px #888888",
                borderRadius: "0.5rem",
              }}
            >
              
              {Items.hit.recipe.label}
            </h1>
          )}

          <div key={uuid()} className={showDitail ? 'recipeShow' : 'recipeHide'}>
            <div className={!showDitail && 'divMe'}>
              {showDitail && (
                <>
                  <br />
                  <br />
                  <br />
                </>
              )}

              <img
                src={Items.hit.recipe.image}
                alt=""
              />            
              <h2> {Items.hit.recipe.label}</h2>
              <h3>Price: ${Items.price}</h3>
              <p>
                {Items.hit.recipe.cuisineType} {Items.hit.recipe.dietLabels} for{" "}
                {Items.hit.recipe.mealType}
              </p>
              <p>Calories: {(Items.hit.recipe.calories).toFixed(2)}gm</p>
              {showDitail && (<p className='p'>HealthLabels:{(Items.hit.recipe.healthLabels)}</p>)}

              <div className="btnDiv" >
                <button onClick={() =>
                  submitOrder(
                    Items.id,
                    Items.hit.recipe.label,
                    Items.hit.recipe.image,
                    Items.price
                  )
                }>Order</button>

                <button onClick={() => dispatch({ type: REMOVE_RECIPE, payload: Items.id })}>Ignore</button>

                <a href={Items.hit.recipe.url}>Third Party</a>
                <button onClick={() => setShowDitail(!showDitail)}> {showDitail ? "hide ditail" : "show ditail"}</button>
              </div>
            </div>

            {showDitail ? (
              <>
                <div className='ditailsIng'>
                  <h2 style={{
                    textAlign: "center",
                    textDecoration: 'underLine'
                  }}>
                    {" "}
                      Ingredients
                    </h2><br />
                  {Items.hit.recipe.ingredients.map((ingredient) => (
                    <Ingredient {...ingredient} key={uuid()} />
                  ))}

                </div>
                <div>
                  <h2 style={{
                    textDecoration: 'underLine'
                  }}> Digest</h2><br />
                  {Items.hit.recipe.digest.map((content, index) => (
                    <Digest {...content} key={uuid()} index={index} />
                  ))}
                </div>
              </>
            ) : ''
            }
          </div>
        </>
      ))
      }
    </div>
  );
};

export default Item;
