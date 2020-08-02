import React from 'react'
import { Panel, Tag } from 'rsuite';
import NotFoundImage from '../../static/not-found.png'
import { filterByName } from '../../utils/string'

import './drinks-list.css'

export const DrinksList = ({ list, filter, handleClick }) => {

    return (
        list
            .filter(drink => filterByName(drink.name, filter))
            .map(drink => {
                return <Panel className='drink-panel' bordered key={drink.name} onClick={() => handleClick(drink)}>
                    <img className='drink-image' /*src={drink.thumbnail}*/ alt="" onError={(e) => e.target.src = NotFoundImage} />

                    <span className="drink-name">{drink.name}</span>

                    <Tag className={`ingredients ${drink.ingredients.length === 4 ? 'primary-color' : ''}`}>
                        4 / {drink.ingredients.length}
                    </Tag>
                </Panel>
            })
    )
}
