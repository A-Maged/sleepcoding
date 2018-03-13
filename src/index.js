/* libs */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

/* redux */
import store from './redux/store';

/* components */
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
