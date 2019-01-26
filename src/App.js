import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const API_KEY = "fkjsdhfkjshf";
class App extends Component {

state = {
  recipes: []
}

  getRecipes = async e => {

    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
  
    const api_call = await fetch(`dlkfjklsj${API_KEY}`);
    const data = await api_call.json();

    console.log(recipeName);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Garage Search</h1>
        </header>
        <Form getGarages={this.getGarages} />
      </div>
    );
  }
}

export default App;
