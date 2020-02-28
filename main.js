const drinks = require('./drinks.js')

/* Lista todas as receitas com aquele ingrediente
let result = []
let ingrediente = 'Olive'

for(let i = 0; i < drinks.length; i++) {
	for(let j = 1; j <= 15; j++) {
		if(drinks[i]['strIngredient' + j] === ingrediente) {
			result.push(drinks[i])
		}
	}
}

console.log(result.length + ' of ' + drinks.length) */

/* Lista todos os ingredientes
ingredients = []

for(let i = 0; i < drinks.length; i++) {
	for(let j = 1; j <= 15; j++) {
		let name  = drinks[i]['strIngredient' + j]
		if(name !== null && !ingredients.includes(name)) {
			ingredients.push(name)
		}
	}
}

console.log(ingredients.sort()) */

myIngredients = ['Gin', 'Campari', 'Sweet Vermouth']
let total, inHome

for(let i = 0; i < drinks.length; i++) {
	for(let j = 1; j <= 15; j++) {
		let name = drinks[i]['strIngredient' + j]
		total = 0
		inHome = 0

		if(name !== null) { total + 1 }
		
		if(myIngredients.includes(name)) { inHome + 1 }
	}
	console.log(inHome + ' / ' + total)
	drinks[i]['rank'] = inHome / total
}

//let result = drinks.sort(d => d.rank)
console.log(drinks[1])