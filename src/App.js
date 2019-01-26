import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const API_KEY = "a05665efd3aff1fb699c986be7b0cc12";
class App extends Component {

state = {
  recipes: []
}

  getRecipe = async e => {

    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
  
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`);
    const data = await api_call.json();

    console.log(data.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
