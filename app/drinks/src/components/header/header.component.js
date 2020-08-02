import React from 'react'
import { Affix, Input, InputGroup, Icon, Nav } from 'rsuite';
import config from '../../config'

import './header.css'

export const Header = ({ active, handleSelect, handleFilterChange }) => {

    return (
        <Affix>
            <div className="header">
                <InputGroup inside>
                    <Input onChange={handleFilterChange}/>
                    <InputGroup.Addon>
                        <Icon icon="search" />
                    </InputGroup.Addon>
                </InputGroup>

                <Nav appearance="subtle" activeKey={active} onSelect={handleSelect} justified>
                    <Nav.Item eventKey={config.INGREDIENTS}> My Ingredients </Nav.Item>
                    <Nav.Item eventKey={config.DRINKS}> Drinks </Nav.Item>
                </Nav>
            </div>
        </Affix>
    )
}
