import React from 'react';
import ReactDOM from 'react-dom';
import {DATA} from './utils/data';

import App from './App';
import './styles/GlobalStyles.js';

ReactDOM.render(<App data = {DATA}/>, document.getElementById('app'));