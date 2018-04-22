import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer  from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';
import { userLoggedIn } from './actions/auth'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.studentsJWT){
    const user = { token: localStorage.studentsJWT};
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();