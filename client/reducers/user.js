export const initialState = {
    isLoggedIn: false,
    me: null,
    sighUpData: {},
    loginDate: {},
}

//동적액션
export const loginAction = (data) =>{
    console.log('me의 액션이 실행됩니다..')

    return {
        type: "LOG_IN",
        data,
    }
}

export const logoutAction = () =>{
    console.log("작동")
    return {
        type: "LOG_OUT",
        
    }
}

const reducer = (state = initialState,  action) => {
    console.log('me안에있는 reducer가 실행됩니다.')

    switch (action.type) {
        case "LOG_IN":
            return{

                    ...state,
                    isLoggedIn: true,
                    me: action.data
                
            }

        case "LOG_OUT":
            return{
              
                    ...state,
                    isLoggedIn: false,
                    me: null
            
            }
    
    default:
        return state
    }
}

export default reducer