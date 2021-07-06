
import axios from "axios"
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from "../reducers/post"

//all , for call., put은 사가의 이펙트들임
// all은 배열은 인자로 받으며 배열안에 있는 것들을 한방에 실행시켜준다
// fork는 함수를 비동기적으로 실행하는 것
// call은 함수를 동기적으로 실행하는것  순서대로 함수를 실행해야하는 API 요청 같은 곳에 사용 
// put은 dispatch로 생각
// take는 테이크 인자의 액션이 실행될때까지 기다리겠다는 이펙트
// while속 take와 같이 무한으로 액션을 실행시킨다 단, takeEvery는 비동기적으로 동작함
// takeLatest 누를 때마다 액션을 실행시키는 것이 아닌 마지막 한번만 액션을 실행시킨 (실수로 로그인버튼을 100번 눌렀을 경우 마지막 한번만 요청을 보냄)
// takeLeading 은 takeLatest와 반대로 여러번 눌럿을 경우 맨 앞에것만 실행
// yield throttle('액션', 액션함수, 시간 ) 같은 요청이 계속 들어와도 시간만큼 기다리는 함수  
// delay는 setTimeOut같은 역할
import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"



//addPost 포스트추가 
function addPostAPI(data){ // 밑에 콜에서 받은 action.data임 
    return axios.post('api/addPostAPI', data) // 서버로 넘겨줌 
}

function* addPost(action){

    // const result = yield call(addPostAPI, action.data) // 콜이나 포크의 파라미터는 실행시킬려는 함수안에 넣는것이 아닌 옆의 인자로 넣어준다. 
    try {
        yield delay(1000)
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        })}
    catch{
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data
        })
    }
}

//addComment 커멘트 추가 
function addCommentAPI(data){ // 밑에 콜에서 받은 action.data임 
    return axios.post('api/addPostAPI', data) // 서버로 넘겨줌 
}

function* addComment(action){

    // const result = yield call(addCommentAPI, action.data) // 콜이나 포크의 파라미터는 실행시킬려는 함수안에 넣는것이 아닌 옆의 인자로 넣어준다. 
    try {
        yield delay(1000)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        })}
    catch{
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data
        })
    }
}


function* watchAddPost() {
    
        yield takeLatest(ADD_POST_REQUEST, addPost)
 
}

function* watchAddComment() {
    
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)

}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),

    ])
}