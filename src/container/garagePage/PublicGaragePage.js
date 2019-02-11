import React, { Component } from "react";
// this higer oreder component is use to connect that component to the redux store
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class PublicGaragePage extends Component {
  render() {
    //we  get id from the route  and use that  id to  extract data from database
    const id = this.props.match.params.id;
    console.log(this.props.user);
    const { garageName, logoImg, location, rating } = this.props.garagePage;
    return (
      <div>
        <div>PublicGaragePage id from route:... {id}</div>
        <div>
          PublicGaragePage id from reducer:... {this.props.garagePage.id}
        </div>
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
  // this is use to see  the state of the redux
  console.log(state);
  return {
    garagePage: state.garagePageReducer,
    user: state.userReducer,
    //this is  for getting  data from the firestore collection garagePages  
    
    //code.
    //garagePageFirestore: state.firestore.ordered.garagePages
  };
};

//compose method is  use to  add more than one higher order componnent
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "garagePages" }])
)(PublicGaragePage);
