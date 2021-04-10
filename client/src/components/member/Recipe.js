import React, { useEffect, useState } from "react";
import Item from "./Item";
import SearchFood from "./SearchFood";
import axios from "axios";
import uuid from "react-uuid";
import { useStoreContext } from "../../utils/context/GlobalState";
import { ADD_POST, LOADING, ADD_RECIPE } from "../../utils/context/action";

const Recipe = () => {
  const [state, dispatch] = useStoreContext();
console.log( 'HELLO', state)
  const [recipe, setrecipe] = useState();
  const [search, setSearch] = useState("Ethiopian Food");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchFood();
  }, [search]);

  const fetchFood = () => {
    const APP_ID = 'a7e4cdd9';
    const API_KEY = 'efd018e424ec85db972aafa8104f3600';	

    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`
      )
      .then(res => {
        console.log(res.data.hits);
        const food = res.data.hits.map((hit) => ({ id: uuid(), hit }));
        console.log("food=> ", food);
        dispatch({type:ADD_RECIPE, payload: food})
        setrecipe(({ ...recipe }, food));
        setIsLoading(false);
      });
  };

  const handleClick = (id) => {
    const Item = recipe.filter((item) => item.id !== id);
    setrecipe(Item);
    console.log(recipe);
    console.log(id)
  };

  const handleSearch = (searchFood) => {
    if (searchFood === "") {
      setSearch("chicken");
    } else {
      // console.log(searchFood);
      setSearch(searchFood);
    }
  };

  // console.log("==>", recipe);
  // useEffect(() => {
  //   const app_id = 'a6633875';
  //   const api_key = '9c24552c818c46fdab440aa14deb2ffe';
  //   axios
  //     .get(
  //       `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${app_id}&app_key=${api_key}`
  //     )
  //     .then((response) => console.log("food database: ", response.data));
  // }, []);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)",
        borderTop: "1px solid lightgrey",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <SearchFood handleSearch={handleSearch} />
      <h2 style={{ textAlign: "center", color: "black", marginTop: "10px" }}>
        recipes
      </h2>
      <div
        style={{
          width: "100vw",
          // border: "1px solid red",
          padding: "30px",
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
        }}
      >
        {isLoading
          ? "Loading..."
          : state.recipe[0].map((hit) => (
              <Item {...hit} key={uuid()} handleClick={handleClick} />
            ))}
      </div>

      
      <div> 
      <h1>{state.posts.name}</h1>

      <button onClick={() => dispatch({ type: ADD_POST})}>ADDPOST</button>
      <button onClick={() => dispatch({ type: LOADING})}>LOADING</button>

      </div>
      
    </div>
  );
};

export default Recipe;
