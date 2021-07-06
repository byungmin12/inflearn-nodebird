import React, {useCallback} from 'react'
import {Form, Input, Button} from 'antd'
import useInput from '../hooks/useInput'
import {useSelector, useDispatch} from 'react-redux'
import { ADD_COMMENT_REQUEST } from '../reducers/post'

function CommentForm({post}) {
    const id = useSelector(state => state.user.me?.id)
    const {addCommentDone} = useSelector(state => state.post)
    const [commentText, onChangeCommentText, setCommentText] =useInput('')
    const dispatch = useDispatch()

   //게시글 올리기가 완료되면 텍스트 창 초기화 
    useEffect(()=>{
        if(addCommentDone){
            setCommentText('')
        }
    },[addCommentDone])


    const onSubmitCommnet = useCallback(()=>{
        console.log(post.id,commentText)
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                content: commentText,
                postId: post.id,
                userId: id,
            }
        })
    },[commentText, id])

    return (
        <Form onFinish={onSubmitCommnet}>
            <Form.Item style={{position: "relative", margin: 0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button style={{position:"absolute", right: 0, bottom: -40}} type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    )
}

export default CommentForm
