import {createWrapper}  from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from '../reducers/index'


const configureStore = () =>{
    const middlewares = [];
    const enhancer = process.env.Node_ENV === "production" 
    ? compose(applyMiddleware(...middlewares)) 
    :  composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer,enhancer)    
    
    return store
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.Node_ENV === 'development',
})

export default wrapper;