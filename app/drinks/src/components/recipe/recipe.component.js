import React from 'react'
import { Panel, Checkbox, Divider, Tag, Timeline, Icon } from 'rsuite';
import config from '../../config'

import './recipe.css'

export const Recipe = ({ drink, handleClose }) => {

    const renderIngredients = () => {
        return drink.ingredients.map((ingredient, index) => {
            return <Checkbox defaultChecked key={index}>
                <span>{ingredient.name}</span>
                <span className='recipe-measure'>{ingredient.measure}</span>
            </Checkbox>
        })
    }

    const renderInstructions = () => {
        return drink.instructions
            .split('.')
            .filter(instruction => instruction !== config.EMPTY)
            .map((instruction, index) => {
                return <Timeline.Item key={index}>{instruction}.</Timeline.Item>
            })
    }

    const renderTags = () => {
        drink.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>
        })
    }

    return (
        <Panel className='recipe-panel'>
            <Icon size="lg" icon='close' onClick={handleClose} />

            <p className='recipe-name'>{drink.name}</p>

            <img className='recipe-image' src={drink.thumbnail} alt="" />

            <div className='recipe-glass'>
                <p>Serve in: {drink.glass}</p>
                <Tag className={`${drink.alcoholic === config.ALCOHOLIC ? 'primary-color' : ''}`}>
                    {drink.alcoholic}
                </Tag>
            </div>

            <Divider>Ingredients</Divider>

            {renderIngredients()}

            <Divider>Instructions</Divider>

            <Timeline>
                {renderInstructions()}
            </Timeline>

            <div className='recipe-tags'>
                {renderTags()}
            </div>
        </Panel>
    )
}
