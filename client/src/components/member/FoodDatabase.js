import React, { useEffect } from 'react'
import axios from 'axios'

const FoodDatabase = () => {

    useEffect(() => {
    const app_id = 'a6633875';
    const api_key = '9c24552c818c46fdab440aa14deb2ffe';
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
