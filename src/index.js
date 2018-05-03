import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer  from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';
import { adminLoggedIn } from './actions/admin/adminAuth'
import { studentLoggedIn } from './actions/student/studentAuth'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.adminJWT){
    const admin = { token: localStorage.adminJWT};
    store.dispatch(adminLoggedIn(admin));
}
else if(localStorage.studentJWT){
    const student = { token: localStorage.studentJWT};
    store.dispatch(studentLoggedIn(student));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();