import React, { Component } from "react";

const Form = (props) => (
  <form onSubmit={props.getGarages}>
    <input type="text" name="recipeName" />
    <button>Search</button>
  </form>
);

export default Form;