//펑션 뒤에 *는 generate을 나타냄

import { getDisplayName } from "next/dist/next-server/lib/utils"

//what is generate ?
// 만약 제너레이터 함수
// const get - function* () {

// }
// 가 있다고 치면 
// gen()으로 실행한느것이 아닌

// get().next()로 실행이 가능함
// 예를 들어
// const gen = function* (){
//     console.log(1)
//     yield;
//     console.log(2)
//     yield; ===> 제너레잇 함수를 멈추는 기능 
//     console.log(3)
//     yield 4;
// }

// const generate = gen()
// 으로 generate을 실행하면 
// gen을  {<suspended>} 가 실행됨 

// 그래서 generate.next()를 붙여주면 
// 1이 실행이 됨 

// 제너레이터 함수는 next()를 실행해줘야 작동한다.

// 한번만 실행하면 1이 실행
// 두번 실행하면 2가 실행
// 세번 실행하면 3이 실행되고 {value : 4, done: false}
// 한번 더 실행하면 {value: undefined, done: true}
// why  ?
// generate 함수는 함수안에 yield가 있으면 그 부분에서 실행을 멈추고 
// 다시 실행하면 그 다음부터 실행이 된다  ===> yield는 중단점(breaking point)이다.
// 그리고 yield뒤에 숫자가 값을 넣어주면  객체 안에 value로 리턴이 된다 e

//사가의 장점 
// 테스트하기에 매우 편하다 ~
// 왜 why?
// next로 한줄한줄 확인할수있기 때문에

import axios from "axios"

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

import postSaga from "./post"
import userSaga from "./user"


//이걸 루트 사가라고 부름
// 루트사가를 만들고 그 안에 만들고싶은 비동기 액션들을 넣어준다.
export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ])
}