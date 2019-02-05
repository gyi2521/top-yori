import React from "react";

const SearchContainer = props => (
  <div className="ui search">
    <form onSubmit={props.searchClickHandler}>
      <div className="ui icon input searchDish">
        <input
          style={{ border: "1px solid grey" }}
          className="prompt"
          onChange={props.searchChangeHandler}
          type="text"
          placeholder="Search dish..."
        />
        <i className="search icon" />
      </div>
    </form>
  </div>
);

export default SearchContainer;
