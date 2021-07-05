import React,{useState, useCallback} from 'react'
import {Card, Popover, Space, Avatar, List, Comment } from 'antd'
import post from '../reducers/post'
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined,HeartTwoTone } from '@ant-design/icons'
import { Button } from 'antd/lib/radio'
import {useSelector} from "react-redux"
import PostImages from './PostImages'
import CommentForm from '../components/CommentForm.js'
import PostCardContent from './PostCardContent'
// import Avatar from 'antd/lib/avatar/avatar'

function PostCard({post}) {
    const {me} = useSelector(state => state.user)
    const id = me?.id  //옵셔널 체이닝 연산자
    const [liked, setLiked] = useState(false)
    const [commentFormOpened, setConmentFormOpened] = useState(false)

    const onToggleLike = useCallback((prev)=>{
        console.log("작동중")
        setLiked(prev=>!prev)
    },[])

    const onToggleComment = useCallback(()=>{
        setConmentFormOpened(prev=>!prev)
    },[])

    return (
        <div style={{marginBottom:"20px"}}>
            <Card
            cover={post.Images[0] && <PostImages images={post.Images} />}
            actions={[
                <RetweetOutlined key="retweet"/>,
                 liked 
                    ? <HeartTwoTone twoToneColor="#f44336" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike}/>
                 ,
                <MessageOutlined key="comment" onClick={onToggleComment}/>,
                <Popover key="more" content={(
                    <Space>
                        {id && post.User.id === id ? (
                            <>
                            <Button>수정</Button>
                        <Button type="danger">삭제</Button>
                            </>
                        )
                        :
                        <Button>신고</Button>
                    }

                    </Space>
                )}>
                    <EllipsisOutlined/>
                </Popover>
            ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened 
            && 
            <div>
                <CommentForm post={post} />   
                <List 
                    header={`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    renderItem={item=>(
                        <li>
                            <Comment
                                author={item.User.nickname}
                                content={item.content}
                            />
                        </li>
                    )}
                /> 
            </div>}
        </div>
    )
}

export default PostCard
