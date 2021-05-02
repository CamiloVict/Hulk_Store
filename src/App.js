import React, {Fragment} from 'react';
import { Router} from "@reach/router"

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { createTheme, BaseProvider } from 'baseui';

import GlobalStyles from './styles/GlobalStyles';


import {Layout} from './components/Layout/index';
import {Add} from './pages/Add/index'
import {Home} from './pages/Home/index';
import {Remove} from  './pages/Remove/index';
import {Edit} from './pages/Edit/index';
import {COLUMNS,DATA} from './utils/data';


const theme = createTheme(primitives, overrides);
const engine = new Styletron();

const primitives = {
    accent: '#0581C1', // hot pink
    accent50: '#E0F3FA',
    accent100: '#C1E6F5',
    accent200: '#069BD7',
    accent300: '#0471A9',
    accent400: '#046191',
    accent500: '#035179',
    accent600: '#034161',
    accent700: '#023048',
  };

  const overrides = {
    colors: {
      buttonPrimaryFill: primitives.accent,
      buttonPrimaryText: '#FFF',
      buttonPrimaryHover: primitives.accent200,
      buttonPrimaryActive: primitives.accent300,
      buttonPrimarySelectedFill: primitives.accent200,
      buttonPrimarySelectedText: '#FFF',
      buttonPrimarySpinnerForeground: primitives.accent700,
      buttonPrimarySpinnerBackground: primitives.accent300,
    },
  };

function App (props) {
  const data = props.data;
  return (
    <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
            <Fragment>
                <GlobalStyles/>
                <Layout>  
                  <Router>
                    <Home data = {data}  exact path = '/' />
                    <Home data = {data}  exact path = '/home' />
                    <Add data = {data} exact path = '/add' />
                    <Remove data = {data}  exact path = '/remove' />
                    <Edit data = {data}  exact path = '/edit' />
                  </Router>
                </Layout>
            </Fragment> 
        </BaseProvider>
        </StyletronProvider>      
    ) 
}

export default App;