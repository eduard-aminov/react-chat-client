import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {authReducer, dialogsReducer, messagesReducer} from './reducers'

const rootReducer = combineReducers({
    auth: authReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store