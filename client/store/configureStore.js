import {createWrapper}  from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from '../reducers/index'

//리덕스 사가의 설정 방법
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../sagas'


//리덕스 thunk는 리덕스가 함수를 리턴하는 비동기 액션을 디스패치할 수 있도록 도와준다.
// 사용이유 
// 하나의 비동기 액션안에 여러개의 동기 액션을 넣을 수 있음  
// post get 등등을 두개 이상을 할 수있다.

//리덕스 사가 
// 리덕스 thunk랑 비슷하지만 더 좋고 많은 기능들을 제공

const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.Node_ENV === "production" 
    ? compose(applyMiddleware(...middlewares)) 
    :  composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer,enhancer)  
    
    //리덕스 사가의 설정 방법
    store.sagaTask = sagaMiddleware.run(rootSaga)  
    
    return store
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.Node_ENV === 'development',
})

export default wrapper;