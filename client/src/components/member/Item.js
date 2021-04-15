import React from "react";
import { BsFolderPlus } from "react-icons/bs";
import uuid from "react-uuid";
import Digest from "./Digest";
import Ingredient from "./Ingredient";
import { SHOW_DITAIL, HIDE_DITAIL } from '../../utils/context/action'
import { useStoreContext } from '../../utils/context/GlobalState'

const Item = (props) => {
  // console.log(`=====>`, props)
  const [state, dispatch] = useStoreContext()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          backgroundColor: "white",
          // margin: "0 auto",
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
          src={props.hit.recipe.image}
          alt=""
        />

        <div style={{ padding: "30px" }}>
          <h2> {props.hit.recipe.label}</h2>
          <h3>Price: $ {props.price}</h3>
          <p>
            {props.hit.recipe.cuisineType} {props.hit.recipe.dietLabels} for{" "}
            {props.hit.recipe.mealType}
          </p>
          <p>Calories: {(props.hit.recipe.calories).toFixed(2)}</p>
          <p>HealthLabels:{(props.hit.recipe.healthLabels)}</p>
          <button onClick={() => props.handleClick(props.id)}>Purchase</button>
          <a href={props.hit.recipe.url}>Third Party</a>
          <button onClick={() => dispatch({ type: SHOW_DITAIL, payload: { id: props.id, ingredient: props.ingredients } })}>show detail</button>
          <button onClick={() => dispatch({ type: HIDE_DITAIL, payload: props.id })}>hide detail</button>

          {state.ditail ? (
            <>
              <h4 style={{ textAlign: "center", marginTop: "2rem" }}>
                {" "}
            Ingredients
          </h4>
              {props.hit.recipe.ingredients.map((ingredient) => (
                <Ingredient {...ingredient} key={uuid()} />
              ))}

              <h4>Digest</h4>
              {props.hit.recipe.digest.map((content, index) => (
                <Digest {...content} key={uuid()} index={index} />
              ))}
              <h4>healthLabels</h4>
              {props.hit.recipe.healthLabels.map((healthLabels)=>(
                <healthLabels {...healthLabels} key={uuid} />
              ))}
            </>
          ) : ''
          }


        </div>
      </div>
      {/* {state.SHOW_DITAIL ? (<div style={{ border: "1px solid red" }}>
        <h4>Digest</h4>
        {props.hit.recipe.digest.map((content, index) => (
          <Digest {...content} key={uuid()} index={index} />
        ))}
      </div>) : ''} */}

    </div>
  );
};

export default Item;
