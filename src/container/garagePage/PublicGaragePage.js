import React, { Component } from "react";

// this higer oreder component is use to connect that component to the redux store
import { connect } from "react-redux";

class PublicGaragePage extends Component {
  render() {
    //we  get id from the route  and use that  id to  extract data from database
    const id = this.props.match.params.id;
    const { garageName, logoImg, location, rating } = this.props.garagePage;
    return (
      <div>
        <div>PublicGaragePage id from route:... {id}</div>
        <div>PublicGaragePage id from reducer:... {this.props.garagePage.id}</div>
        <div>PublicGaragePage garageName from reducer:... {garageName}</div>
        <div>PublicGaragePage garageName from reducer:... {logoImg}</div>
        <div>PublicGaragePage location from reducer:... {location}</div>
        <div>PublicGaragePage rating from reducer:... {rating}</div>
      </div>
    );
  }
}
//  State paramete is the data the holds by the store of  the redux
// garagePage is the state of the component
// state.garagePageReducer is  the state  that hold  by the user
const mapStateToProps = state => {
  return {
    garagePage: state.garagePageReducer
  };
};
export default connect(mapStateToProps)(PublicGaragePage);
