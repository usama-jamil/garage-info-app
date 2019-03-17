import React, { Component } from "react";
// this higer oreder component is use to connect that component to the redux store
import { connect } from "react-redux";
import { updateGaragePage } from "../../store/actions/garagePageActions";

class UpdateGaragePage extends Component {
  state = {};
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  validate() {}

  handleSubmit(e) {
    e.preventDafault();
    //this get the updated page from state
    //update this  on cloud by this function  that dispatach an action to reducer
    this.props.updateGaragePage(this.state);
  }
  render() {
    //we  get id from the route  and use that  id to  extract data from database
    const { garageName, logoImg, location, rating } = this.props.garagePage;
    const id = this.props.match.params.id;
    return <div />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateGaragePage: garegePage => dispatch(updateGaragePage(garegePage))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateGaragePage);
