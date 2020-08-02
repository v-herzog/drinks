import React from 'react';
import { Route } from 'react-router-dom';
import { DrinksScreen } from './screens'

import './App.css';
import 'rsuite/lib/styles/themes/dark/index.less';

function App() {
    return (
        <Route path="/" exact>
            <DrinksScreen/>
        </Route>
    );
}

export default App;
