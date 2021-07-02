export const initialState = {
    isLoggedIn: false,
    user: null,
    sighUpData: {},
    loginDate: {},
}

//동적액션
export const loginAction = (data) =>{
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
    switch (action.type) {
        case "LOG_IN":
            return{

                    ...state,
                    isLoggedIn: true,
                    user: action.data
                
            }

        case "LOG_OUT":
            return{
              
                    ...state,
                    isLoggedIn: false,
                    user: null
            
            }
    
    default:
        return state
    }
}

export default reducer