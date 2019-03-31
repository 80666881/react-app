import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middlewares/loggers'

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware,loggerMiddleware))
)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));