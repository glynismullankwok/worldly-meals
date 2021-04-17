import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FoodDatabase = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  console.log(data.food)

  useEffect(() => {
    const app_id = process.env.REACT_APP_app_id;
    const api_key = process.env.REACT_APP_api_key;

    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${app_id}&app_key=${api_key}`
      )
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        response.data.hints.map(data => {
          // console.log("food database: ", data.food.category)
          setData(data);
          setIsLoading(false);
        })

      });

  }, []);

  return (
    <div>
      {isLoading && <h1>FoodDatabase</h1>}
    </div>
  )
}

export default FoodDatabase
