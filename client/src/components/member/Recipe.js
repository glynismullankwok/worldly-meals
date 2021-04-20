import React, { useEffect, useState } from "react";
import Item from "./item/Item";
import SearchFood from "./SearchFood";
import axios from "axios";
import uuid from "react-uuid";
import { useStoreContext } from "../../utils/context/GlobalState";
import { ADD_RECIPE } from "../../utils/context/action";
import './recipe.css';

const Recipe = () => {
  const [_, dispatch] = useStoreContext();
  const [recipe, setrecipe] = useState();
  const [search, setSearch] = useState("Ethiopian Food");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchFood();
  }, [search]);

  const fetchFood = () => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;
    
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

  const handleSearch = (searchFood) => {
    if (searchFood === "") {
      setSearch("chicken");
    } else {
      // console.log(searchFood);
      setSearch(searchFood);
    }
  };

  return (
    <div className='recipeContainer'>
      <SearchFood handleSearch={handleSearch} />
      <div className='recipeLoading'>
      <h1 className='recipeHeader'>
        Recipes
      </h1>

        {isLoading ? "Loading..." : (<Item />)}
      </div>
    </div>
  );
};

export default Recipe;
