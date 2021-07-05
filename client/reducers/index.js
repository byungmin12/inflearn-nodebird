import { HYDRATE } from "next-redux-wrapper"
import user from "./user"
import post from "./post"
import { combineReducers } from "redux"


//리듀써 
//컴바인 리듀서로인해 유져의 이니셜스테잇과 포스트의 이니셜스테잇으 합쳐진다.
const rootReducer = combineReducers({
    //서버사이드렌더링을 위해서 index를 추가한 거고 안에 reducer를 통해 HYDRATE을 작성해준것이다. 
    index: (state={}, action )=>{
        console.log('컴파인리듀서부분이 실행됩니다.index.js')
        switch(action.type) {
            case HYDRATE :
                console.log("HYDRATE", action)
                return {...state, ...action.payload}

            default:
                return state;
        }
    },
    user,
    post,
})

export default rootReducer