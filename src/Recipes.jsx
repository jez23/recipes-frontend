
import React, { Component } from 'react'
import './Recipes.css'
import RecipesList from './components/RecipesList'
const request = require('superagent')

class Recipes extends Component {
  
 render () {
  return (
    <div className="recipes-container">
      <RecipesList recipes={this.state.recipes} />
    </div>
  )
}
 componentDidMount () {
    request.get('http://localhost:3001/recipes').end((error, response) => {
      if (!error) {
        this.setState({ recipes: response.body })
      }
    })
  }
}

export default Recipes