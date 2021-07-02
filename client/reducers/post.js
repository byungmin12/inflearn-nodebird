export const initialState = {
    mainPosts :[],

}

const post = (state = initialState,  type = initialState, action ) => {
    switch (action.type) {

    case typeName:
        return { }

    default:
        return state
    }
}


export default post