import React, { useState } from "react";
import uuid from "react-uuid";
import Digest from "./Digest";
import Ingredient from "./Ingredient";
import { REMOVE_RECIPE } from '../../utils/context/action'
import { useStoreContext } from '../../utils/context/GlobalState'

const Item = () => {
  // console.log(`=====>`, state)
  const [state, dispatch] = useStoreContext()
  const [showDitail, setShowDitail] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {state.recipe !== [] && state.recipe[0].map((Items) => (
        <>
          <div
            style={{
              backgroundColor: "white",
              marginBottom: "30px",
              width: "400px",
              height: "auto",
              padding: " 10px",
              boxShadow: "5px 10px 8px #888888",
              margin: "1rem",
            }}
          >
            <img
              style={{ width: "100%", margin: "0 auto" }}
              src={Items.hit.recipe.image}
              alt=""
            />

            <div style={{ padding: "30px" }}>
              <h2> {Items.hit.recipe.label}</h2>
              <h3>Price: $ {Items.price}</h3>
              <p>
                {Items.hit.recipe.cuisineType} {Items.hit.recipe.dietLabels} for{" "}
                {Items.hit.recipe.mealType}
              </p>
              <p>Calories: {(Items.hit.recipe.calories).toFixed(2)}</p>
              <p>HealthLabels:{(Items.hit.recipe.healthLabels)}</p>
              <button onClick={() => dispatch({ type: REMOVE_RECIPE, payload: Items.id })}>Purchase</button>
              <a href={Items.hit.recipe.url}>Third Party</a>
              <button onClick={() => setShowDitail(!showDitail)}> {showDitail ? "hide ditail" : "show ditail"}</button>

              {showDitail ? (
                <>
                  <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                    {" "}
                      Ingredients
                    </h3>
                  {Items.hit.recipe.ingredients.map((ingredient) => (
                    <Ingredient {...ingredient} key={uuid()} />
                  ))}

                  <h3>Digest</h3>
                  {Items.hit.recipe.digest.map((content, index) => (
                    <Digest {...content} key={uuid()} index={index} />
                  ))}
                  <h3>healthLabels</h3>
                  {/* {Items.hit.recipe.healthLabels.map((healthLabels) => (
                    <healthLabels {...healthLabels} key={uuid} />
                  ))} */}
                </>
              ) : ''
              }
            </div>
          </div>
        </>
      ))
      }
    </div>
  );
};

export default Item;
