import React, {Fragment} from 'react';

import {GlobalStyles} from './styles/GlobalStyles';

import {Product} from './components/Product/index'

const App = () => {
    return (
            <Fragment>
                <GlobalStyles/>
                <Product/>
            </Fragment>    
    ) 
}

export default App;