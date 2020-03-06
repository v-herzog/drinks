const drinks = require('./drinks.js')
const fs = require('fs')

const safeTrim = elem => (elem || '').trim()

const mapIngredient = elem => {
	const [ingredient, measure] = elem

	return {
		name: safeTrim(ingredient),
		measure: safeTrim(measure)
	}
}

const mapIngredients = ingredients =>
	ingredients.map(mapIngredient)
		.filter(elem => elem.name && elem.measure)

var newDrinks = drinks.map(elem => ({
	id: elem.idDrink,
	name: elem.strDrink,
	alternateName: elem.strDrinkAlternate,
	tags: elem.strTags ? elem.strTags.split(',') : [],
	category: elem.strCategory,
	iba: elem.strIBA,
	alcoholic: elem.strAlcoholic,
	glass: elem.strGlass,
	instructions: elem.strInstructions,
	thumbnail: elem.strDrinkThumb,
	ingredients: mapIngredients([
		[elem.strIngredient1, elem.strMeasure1],
		[elem.strIngredient2, elem.strMeasure2],
		[elem.strIngredient3, elem.strMeasure3],
		[elem.strIngredient4, elem.strMeasure4],
		[elem.strIngredient5, elem.strMeasure5],
		[elem.strIngredient6, elem.strMeasure6],
		[elem.strIngredient7, elem.strMeasure7],
		[elem.strIngredient8, elem.strMeasure8],
		[elem.strIngredient9, elem.strMeasure9],
		[elem.strIngredient10, elem.strMeasure10],
		[elem.strIngredient11, elem.strMeasure11],
		[elem.strIngredient12, elem.strMeasure12],
		[elem.strIngredient13, elem.strMeasure13],
		[elem.strIngredient14, elem.strMeasure14],
		[elem.strIngredient15, elem.strMeasure15],
	])
}))

fs.writeFileSync('drinks.json', JSON.stringify(newDrinks))