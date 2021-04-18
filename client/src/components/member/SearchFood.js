import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";


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
      style={{ width: "50%", margin: "10px 0px 0px 10px" }}
      className="input-group mb-3"
    >
      <input
        type="text"
        className="form-control"
        placeholder="search recipes"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={searchFood}
        onChange={(e) => {
          setSearchFood(e.target.value);
        }}
      />
      <span
        className="input-group-text"
        type="submit"
        onClick={() => {
          props.handleSearch(searchFood);
          setSearchFood("");
        }}
        style={{
          backgroundColor: "white",
          cursor: "pointer",
          border: "1px solid lightgray",
        }}
      >
        <BsSearch />
      </span>
    </div>
  );
};

export default SearchFood;