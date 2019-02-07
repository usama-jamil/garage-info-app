import React, { Component } from "react";

const PublicGaragePage = (props) => {
    //we  get id from the route  and use that  id to  extract data from database
    const id = props.match.params.id

    return(
        <div>PublicGaragePage id from route{id}</div>
    )
};

export default PublicGaragePage;
