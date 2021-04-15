import React, { useEffect, useState } from "react";
import Item from "./Item";
import SearchFood from "./SearchFood";
import axios from "axios";
import uuid from "react-uuid";
import { useStoreContext } from "../../utils/context/GlobalState";
import { ADD_RECIPE, REMOVE_RECIPE } from "../../utils/context/action";

const Recipe = () => {
  const [state, dispatch] = useStoreContext();
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
        // console.log(res.data.hits);
        const food = res.data.hits.map((hit) => ({ id: uuid(), price:(Math.random() * 10 + 20).toFixed(2), hit }));
        // console.log("food=> ", food);
        dispatch({type:ADD_RECIPE, payload: food})
        setrecipe(({ ...recipe }, food));
        setIsLoading(false);
      });
  };

  const handleClick = (id) => {
    const Item = recipe.filter((item) => item.id !== id);
    setrecipe(Item);
    dispatch({type: REMOVE_RECIPE, payload:Item.id})
    console.log(Item)
    // console.log(recipe);
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
          : (<Item />)
          // state.recipe[0].map((hit) => (
          // <Item {...hit} key={uuid()} handleClick={handleClick} />
            }
      </div>

    </div>
  );
};

export default Recipe;
