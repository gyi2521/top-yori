import React, { Component } from "react";
import ChipsArray from "./components/chipsArray";
import HeaderBar from "./components/header";
import * as $ from "axios";
import SearchContainer from "./components/searchContainer";
import SearchResult from "./components/searchResult";
import DishInput from "./components/dishInput";
import "./main.css";
import DishCard from "./components/cardDisplay";

class App extends Component {
  state = {
    popularDishList: [],
    newDish: {},
    searchedDish: "",
    searchResult: [],
    keywordList: [],
    startPosition: 0
  };

  handleChange = event => {
    const newEnteredDish = this.state.newDish;
    newEnteredDish[event.target.name] = event.target.value;
    this.setState({ newDish: newEnteredDish });
    //console.log(newEnteredDish);
  };

  handleClick = event => {
    //event.preventDefault();
    //console.log('hey');
    $.post("/api/dish", this.state.newDish).then(result => {
      console.log('hey');
      console.log("/api/dish", this.state.newDish);
      this.setState({ newDish: {} });
      //this.componentDidMount();
    });
  };

  componentDidMount() {
    $.get("/api/dish/default").then(result => {
      //console.log("mount:", result.data);
      this.setState({ popularDishList: result.data });
    });

    $.get("/api/category/").then(result => {
      //console.log("keyword: ", result.data);
      this.setState({ keywordList: result.data })
    })
  }

  searchHandleChange = event => {
    this.setState({ searchedDish: event.target.value });
  };

  searchHandleClick = event => {
    event.preventDefault();

    $.get("/api/dish/" + this.state.searchedDish).then(result => {
      //console.log(result.data);
      this.setState({ startPosition: 0 });
      this.setState({ popularDishList: result.data });
    });
  };

  keywordHandleClick = event => {
    this.setState({ searchedDish: event.target.innerText });
    this.retrieveSearchResult(event.target.innerText)
    //this.searchHandleClick(event);
  }

  retrieveSearchResult = (searchTerm) => {
    $.get("/api/dish/" + searchTerm).then(result => {
      console.log(result.data);
      this.setState({ startPosition: 0 });
      this.setState({ popularDishList: result.data });
    });
  }

  displayNext = event => {
    let totalLength = this.state.popularDishList.length;

    if (this.state.startPosition + 5 < totalLength) {
      let dishStartPosition = this.state.startPosition + 5;
      this.setState({ startPosition: dishStartPosition });
    }
  }

  displayPrevious = event => {
    if (this.state.startPosition - 5 > -1) {
      let dishStartPosition = this.state.startPosition - 5;
      this.setState({ startPosition: dishStartPosition });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="bg"> </div>
        <HeaderBar /><br />
        <ChipsArray keywordClickHandler={this.keywordHandleClick} keywordList={this.state.keywordList} />
        <SearchContainer
          className="search"
          searchChangeHandler={this.searchHandleChange}
          searchClickHandler={this.searchHandleClick}
        />
        <DishInput
          newDish={this.state.newDish}
          inputChangeHandler={this.handleChange}
          inputClickHandler={this.handleClick}
        />
        <DishCard popularDishList={this.state.popularDishList}
          displayNext={this.displayNext}
          displayPrevious={this.displayPrevious}
          startPosition={this.state.startPosition} />
        <SearchResult searchResult={this.state.searchResult} />
      </div>
    );
  }
}

export default App;
