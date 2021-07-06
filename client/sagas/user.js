import axios from "axios"
import { 
    LOG_IN_SUCCESS, LOG_IN_FAILURE,LOG_IN_REQUEST,
    LOG_OUT_SUCCESS,LOG_OUT_FAILURE,LOG_OUT_REQUEST,
    SIGN_UP_FAILURE,SIGN_UP_REQUEST,SIGN_UP_SUCCESS 
} from "../reducers/user"

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

//로그인 부분
function logInAPI(data){ // 밑에 콜에서 받은 action.data임 
    return axios.post('api/login', data) // 서버로 넘겨줌 
}

function* logIn(action){
    console.log("사가의 LOG_IN_REQUEST 입니다.")
    // const result = yield call(logInAPI, action.data) // 콜이나 포크의 파라미터는 실행시킬려는 함수안에 넣는것이 아닌 옆의 인자로 넣어준다. 

    try {
        yield delay(1000)
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        })}
    catch{
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        })
    }
}


//로그아웃
function logOutAPI(){
    return axios.post('api/logout')
}

function* logOut(){

    // const result = yield call(logOutAPI)
    try {
        yield delay(1000)
        yield put({
            type: LOG_OUT_SUCCESS,
            // data: result.data
        })}
    catch{
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

//회원가입

function signUpAPI(){
    return axios.post('api/logout')
}

function* signup(){

    // const result = yield call(signUpAPI)
    try {
        yield delay(1000)
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data
        })}
    catch{
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
}


//이벤트 리스너같ㅇ느 역할 
function* watchLogIn() {
    // LOG_IN이라는 액션이 들어온다면 logIn함수를 실행한다는 의미 
    //yield take의 단점은 단 한번만 실행이 가능함 그래서 while문을 써서 무한반복해야하는 것임
    // 단 while take는 동기적으로 동작
    // while(true){
    //     yield take('LOG_IN_REQUEST',logIn)
    // }
    
    yield takeLatest (LOG_IN_REQUEST,logIn)
}

function* watchLogOut() {
    
        yield takeLatest(LOG_OUT_REQUEST,logOut)
        
  
}

function* watchSignUp() {
    
    yield takeLatest(SIGN_UP_REQUEST,signup)
    

}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}