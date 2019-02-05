import React from "react";

const SearchResult = props => (
  <div>
    {props.searchResult.map((dish, i) => (
      <div key={i}>
        <h4>{dish.name}</h4>
        <img src={dish.image} alt="Pad Thai" width="150" height="150" />
        <p>Restaurant: {dish.restaurant}</p>
        <p>Category: {dish.keyword}</p>
        <p>Price: ${dish.price}</p>
        <p>Rating: {dish.rating}</p>
      </div>
    ))}
  </div>
);

export default SearchResult;
