export const initialState = {
    //로그인
    logInLoading: false, // 로그인 완료 
    logInDone: false, // 로그인 시도중    시도중을 만든 이유 : 로딩창을 띄울라고 !
    logInError: null, // 로그인 에러

    //로그아웃
    logOutLoading: false, //로그아웃 시도중 
    logOutDone: false,  //로그아웃 완료
    logOutError: null, // 로그아웃 실패

    //회원가입
    signUpLoading: false, // 회원가입 시도중 
    signUpDone: false,  //회원가입 완료
    signUpError: null, // 회원가입 실패

    me: null,
    sighUpData: {},
    loginDate: {},
}

//로그인 액션명 변수화
export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"
//로그아웃 액션명 변수화
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS"
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE"
//회원가입 액션명 변수화
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"
//팔로우 액션명 변수화
export const FOLLOW_REQUEST = "FOLLOW_REQUEST"
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS"
export const FOLLOW_FAILURE = "FOLLOW_FAILURE"
//언팔로우 액션명 변수화
export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST"
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS"
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE"

//더미
const dummyUser = (data)=>(
    {
        ...data,
        nickname: "제로초",
        id:1,
        Posts: [],
        Followings: [],
        Followers: [],
    }
)


//동적액션
export const loginAction = (data) =>{
    console.log('리듀서의 me의 액션이 실행됩니다..')

    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export const logoutAction = () =>{
    return {
        type: LOG_OUT_REQUEST,
        
    }
}

const reducer = (state = initialState,  action) => {
    console.log('me안에있는 reducer가 실행됩니다.')

    switch (action.type) {

        // 로그인부분
        case LOG_IN_REQUEST:
            return{
                    ...state,
                    logInLoading: true,
                    logInDone: false,
                    logInError:null,                
            }
        
        case LOG_IN_SUCCESS:
            return{

                    ...state,
                    logInLoading: false,
                    logInDone: true,
                    me: dummyUser(action.data)
                
            }

        case LOG_IN_FAILURE:
            return{
                    ...state,
                    logInError: action.error,
                    logInLoading: false,                
            }


        // 로그아웃 부분
        case LOG_OUT_REQUEST:
            return {
                ...state,
                logOutLoading:  true,
                logOutError : null,
                logOutDone :false,
                
            }
            
        case LOG_OUT_SUCCESS:
            return {
                // ...state,
                logOutLoading:  false,
                logOutDone :true,
                // me : dummyUser(action.data)
            }
            

        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading:  false,
                logOutError : action.error
                
            }
          
         // 회원가입 부분
        //  signUpLoading: false, // 회원가입 시도중 
        //  signUpDone: false,  //회원가입 완료
        //  signUpError: null, // 회원가입 실패
         case SIGN_UP_REQUEST:
            return{
                    ...state,
                    signUpLoading: true,
            }

        case SIGN_UP_SUCCESS:
            return{
                
                    ...state,
                    signUpLoading: false,
                    signUpDone: true,
                    me: null,
            }

        case SIGN_UP_FAILURE:
            return{
                
                    ...state,
                    signUpLoading: false,
                    signUpError: action.error,            
            }
    
    default:
        return state
    }
}

export default reducer