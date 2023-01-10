import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import userReducer from './slices/userSlice'
import postReducer from './slices/postSlice'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ user: userReducer })
export default createStore(rootReducer, configureStore({ reducer: { userReducer, post: postReducer } }), compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

)


