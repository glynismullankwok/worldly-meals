import React, { useEffect } from 'react'
import axios from 'axios'

const FoodDatabase = () => {

    useEffect(() => {
      const app_id = process.env.REACT_APP_app_id;
      const api_key = process.env.REACT_APP_api_key;

    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${app_id}&app_key=${api_key}`
      )
      .then((response) => console.log("food database: ", response.data));
  }, []);

    return (
        <div>
           <h1>FoodDatabase</h1> 
        </div>
    )
}

export default FoodDatabase
