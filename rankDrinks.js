const drinks = require('./drinks.json')
const fs = require('fs')

// Creates my ingredients list:
const ingredients = [...new Set(drinks
	.map(drink =>  drink.ingredients)
	.reduce((a, b) => a.concat(b))
	.map(ingredient => ingredient.name))]
	.sort()

console.log(ingredients)