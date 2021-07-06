import React ,{useCallback}from 'react'
import { Card, Avatar, Button} from 'antd'
import {useDispatch, useSelector} from "react-redux"
import {logoutAction} from "../reducers/user"


function Userprofile() {

    const dispatch = useDispatch()
    const { me, logOutLoading } = useSelector(state=>state.user)
    
    const profileLog = useCallback(() => {
        dispatch(logoutAction())
        },[])
        console.log(me)
    return (
        <Card 
            actions={[
                <div key="twit"> 짹짹 <br /> {me.Posts.length}</div>,
                <div key="followings"> 팔로잉 <br /> {me.Followings.length}</div>,
                <div key="followers"> 팔로워 <br /> {me.Followers.length}</div>
            ]}
        >
         <Card.Meta   avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
        />
            <Button onClick={profileLog} loading={logOutLoading}>로그아웃</Button>
        </Card>
    )
}

export default Userprofile
