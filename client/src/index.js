import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Router} from 'react-router-dom';

import './index.css';
import App from './App';

<Route exact path="/" component={MovieList} />

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);
