import React, { useState } from 'react'
import { Grid } from 'rsuite'
import { Header, IngredientsList, DrinksList, Recipe } from '../../components'
import config from '../../config'

import drinks from '../../static/drinks.json'
import ingredients from '../../static/ingredients.json'

import './drinks.css'

export const DrinksScreen = () => {

    const [active, setActive] = useState(config.DRINKS)
    const [filter, setFilter] = useState(config.EMPTY)
    const [drink, setDrink] = useState(null)

    const handleSelect = (activeKey) => setActive(activeKey)
    const handleFilterChange = (value) => setFilter(value)
    const handleClickOnDrink = (drink) => setDrink(drink)
    const handleCloseRecipe = () => {
        setDrink(null)
        console.log('asd')
    }

    const renderPage = () => {
        if (drink)
            return <Recipe handleClose={handleCloseRecipe} drink={drink} />
        else
            return <div>
                <Header active={active} handleSelect={handleSelect} handleFilterChange={handleFilterChange} />
                {renderList()}
            </div>
    }

    const renderList = () => {
        if (active === config.DRINKS)
            return <DrinksList list={drinks} filter={filter} handleClick={handleClickOnDrink}/>

        else if (active === config.INGREDIENTS)
            return <IngredientsList list={ingredients} filter={filter} />
    }

    return (
        <div id="container">
            <div id="window">
                <Grid fluid>
                    {renderPage()}
                </Grid>
            </div>
        </div>
    )
}
