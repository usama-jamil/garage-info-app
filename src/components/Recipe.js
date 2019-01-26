import React, { Component } from 'react'

const API_KEY = "a05665efd3aff1fb699c986be7b0cc12";



class Recipe extends Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe
        console.log(title)
        const searchRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await searchRequest.json();
        console.log(res)
        this.setState({ activeRecipe: res.recipes[0] })
    }
    render() {

        const recipe = this.state.activeRecipe
        return (
            <div className="container">
                <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                    <h3 className="active--recipe__title">{recipe.title}</h3>
                    <h4 className="active--recipe__publisher">Publisher:
                <span>{recipe.publisher}</span>
                    </h4>
                    <p className="active-recipe__website">Website:
                <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button">Go Home</button>
                </div>
            </div>)
    }
}
export default Recipe