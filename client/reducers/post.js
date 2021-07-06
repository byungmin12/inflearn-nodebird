const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: '제로초',
    },
    Images: [],
    Comments: [],
  };

export const initialState = {
    mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글 #해쉬태그 #호로로로로롤',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [{
        User: {
          nickname: 'nero',
        },
        content: '우와 개정판이 나왔군요~',
      }, {
        User: {
          nickname: 'hero',
        },
        content: '얼른 사고싶어요~',
      }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
  };

//포스트 액션의 변수화
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

//커멘트 액션의 변수화
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const addPost = (data)=> (
    {
      type: ADD_POST_REQUEST,
      data,
    }
)

export const addComment = (data)=> (
  {
    type: ADD_COMMENT_REQUEST,
    data,
  }
)


const post = (state = initialState,  action ) => {
    switch (action.type) {

      //포스트 올리기 
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null

      }

    case ADD_POST_SUCCESS:
        return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            addPostDone: true,
            addPostLoading: false,
         }

    case ADD_POST_FAILURE:
      return {
        ...state,
            addPostLoading: false,
            addPostError: action.error,
      }

           //커멘트 올리기 
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null

      }

    case ADD_COMMENT_SUCCESS:
        return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            addCommentDone: true,
            addCommentLoading: false,
         }

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
            addCommentLoading: false,
            addCommentError: action.error,
      }
    

    default:
        return state
    }
}


export default post