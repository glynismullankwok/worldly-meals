import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import './recipe.css'

const SearchFood = (props) => {
  const [searchFood, setSearchFood] = useState("");

  return (
    <div className='search-div'>
      <input
        type="text"
        className="form-control"
<<<<<<< HEAD
        placeholder="search recipes"
        aria-label="Username"
=======

        placeholder="search"
        aria-label="search"

>>>>>>> main
        aria-describedby="basic-addon1"
        value={searchFood}
        onChange={(e) => {
          setSearchFood(e.target.value);
        }}
      />
      <button className="search-btn"
        type="submit"
        onClick={() => {
          props.handleSearch(searchFood);
          setSearchFood("");
        }}><BsSearch /></button>
    </div>
  );
};
export default SearchFood;


