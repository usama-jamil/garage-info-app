import React from "react";

const Search = (props) => (
  <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>
    <input className="search__input" type="text" name="recipeName" />
    <button className="search__button">Search</button>
  </form>
);

export default Search;