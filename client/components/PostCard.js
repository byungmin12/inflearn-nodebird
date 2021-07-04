import React,{useState, useCallback} from 'react'
import {Card, Popover, Space, Avatar } from 'antd'
import post from '../reducers/post'
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined,HeartTwoTone } from '@ant-design/icons'
import { Button } from 'antd/lib/radio'
import {useSelector} from "react-redux"
import PostImages from './PostImages'
// import Avatar from 'antd/lib/avatar/avatar'

function PostCard({post}) {
    const {me} = useSelector(state => state.user)
    const id = me?.id  //옵셔널 체이닝 연산자
    const [liked, setLiked] = useState(false)
    const [conmentFormOpened, setConmentFormOpened] = useState(false)

    const onToggleLike = useCallback(()=>{
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
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart"/>
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
                    description={post.content}
                />
            </Card>
        </div>
    )
}

export default PostCard
