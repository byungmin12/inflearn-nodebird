import React ,{useCallback, useState, useEffect} from 'react'
import {Form, Input, Button, Upload, Modal} from 'antd'
import { PlusOutlined } from '@ant-design/icons'; 
import {useSelector, useDispatch} from "react-redux"
import { addPost } from '../reducers/post'
import useInput from '../hooks/useInput'


function PostForm() {
    const {imagePaths, addPostDone} = useSelector(state => state.post)
    const [text, onChangeText,setText] = useInput('')
    const dispatch = useDispatch()

    //게시글 올리기가 완료되면 텍스트 창 초기화 
    useEffect(()=>{
        if(addPostDone){
            setText('')
        }
    },[addPostDone])

    
    const onSubmit = useCallback(() => {
        dispatch(addPost(text));
      }, [text]);

    return (
        <div>
            <Form style={{margin : "10px"}} encType="multipart/form-data" onFinish={onSubmit}>
                <Input.TextArea
                    value={text}
                    onChange={onChangeText} 
                    maxLength={140} 
                    placeholder="어떤 신기한 일이 있었나요?" 
                />
                <div>
                    <input type="file" multiple hidden />
                    {/* <Button>이미지 업로드</Button> */}
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Upload  listType="picture-card" >
                            이미지 업로드
                        </Upload>
                        <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
                    </div>
                </div>
                <div>
                    {
                        imagePaths.map(v=>(
                            <div key={v} style={{display: "inline-block"}} >
                             <img src={v} style={{width: "200px"}} alt={v} />
                             <div>
                              제거    
                             </div> 
                            </div>
                        ))
                    }
                </div>

            </Form>
        </div>
    )
}

export default PostForm
