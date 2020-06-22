import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {dialogsReducer} from './reducers/'

const rootReducer = combineReducers({
    dialogs: dialogsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store