import React from 'react'
import { Checkbox, CheckboxGroup, Divider } from 'rsuite';
import { filterByName } from '../../utils/string'

export const IngredientsList = ({ list, filter }) => {

    function renderItemsAtHome(atHome) {

        return list
            .filter(ingredient => filterByName(ingredient.name, filter))
            .filter(ingredient => atHome ? ingredient.atHome : !ingredient.atHome)
            .map(ingredient => {
                return <Checkbox
                    key={ingredient.name}
                    defaultChecked={atHome}>
                    {ingredient.name}
                </Checkbox>
            })
    }

    return (
        <CheckboxGroup name="checkboxList">

            <Divider>I have at home</Divider>
            {renderItemsAtHome(true)}

            <Divider>I don't have</Divider>
            {renderItemsAtHome(false)}

        </CheckboxGroup>
    )
}
