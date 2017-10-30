import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {App, Home, Login, Register} from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

ReactDOM.render(
    <App></App>
    , rootElement
);