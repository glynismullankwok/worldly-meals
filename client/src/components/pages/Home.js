import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import uuid from "react-uuid";
import HeroSection from '../Hero/HeroSection';
import SearchFood from "../member/SearchFood";
import '../member/recipe.css';
import '../member/item/item.css';
import '../../App.css';

const Home = () => {
    const history = useHistory()
    const [data, setData] = useState([]);
    console.log(data)
    const [search, setSearch] = useState("Ethiopian Food");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFood();
    }, [search]);

    const fetchFood = () => {
        const APP_ID = process.env.REACT_APP_APP_ID;
        const API_KEY = process.env.REACT_APP_API_KEY;
        axios(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`)
            .then(res => {
                // console.log(res.data.hits);
                const food = res.data.hits.map((hit) => ({ id: uuid(), price: (Math.random() * 10 + 20).toFixed(2), hit }));
                setData(food);
                // console.log("food=> ", food)
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
            <HeroSection />
            <SearchFood handleSearch={handleSearch} />
            {isLoading ? (<p>Loading...</p>) : (
                <div className='allItems'>
                    {data !== [] && data.map((Items) => (
                        <>
                            <div key={uuid()} className='recipeHide'>
                                <div className='divMe'>

                                    <img className='divMe'
                                        src={Items.hit.recipe.image}
                                        alt=""
                                    />
                                    <h2 style={{ maxWidth: '400px' }}> {Items.hit.recipe.label}</h2>
                                    <h3>Price: ${Items.price}</h3>
                                    <p>
                                        {Items.hit.recipe.cuisineType} {Items.hit.recipe.dietLabels} for{" "}
                                        {Items.hit.recipe.mealType}
                                    </p>
                                    <p>Calories: {(Items.hit.recipe.calories).toFixed(2)}gm</p><br />
                                    <button className='btn-order' onClick={() => history.push('/login')}>Order</button>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
            )}
        </div>
    )
}

export default Home;
