import React, { Component } from "react";

const UserGaragePage = (props) => {
    //we  get id from the route  and use that  id to  extract data from database
    const id = props.match.params.id
    return(
        <div>UserGaragePage id from route{id}</div>
    )
    
}


export default UserGaragePage;


