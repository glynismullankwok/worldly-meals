import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import './recipe.css'

const SearchFood = (props) => {
  //const [count, dispatch] = useContext(TryContext);
  //const [state, dispatch] = useStoreContext();
  const [searchFood, setSearchFood] = useState("");
  // console.log(state);
  // const submitBalance = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: SET_BALANCE });
  // };
  return (
    <div
      style={{ width: "25%", margin: "10px 0px 60px 20%", display: 'flex' }}
      className="input-group mb-3"
    >
      <input
        type="text"
        className="form-control"

        placeholder="search"
        aria-label="search"

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


