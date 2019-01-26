import React, { Component } from 'react'

const API_KEY = "a05665efd3aff1fb699c986be7b0cc12";



class Recipe extends Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe

        const searchRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await searchRequest.json();
        this.setState({ activeRecipe: res.recipes[0] })
    }
    render() {
        return (<div>


        </div>)
    }
}
export default Recipe