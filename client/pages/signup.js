import React,{useCallback, useState} from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";


const Signup=() =>{
    const [email, onChageEmail] = useInput('')
    const [nickName, onChageNickName] = useInput('')


    const [password, onChagePassword] = useInput('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password)
    },[password])


    const [term, setTerm] = useState('')
    const [termError, setTermError] = useState(false)
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked)
        setTermError(false)
    },[])

    //리듀서 관련 
   const dispatch = useDispatch()
   const {signUpLoading} = useSelector(state=>state.user)
   

    const onSubmit = useCallback(()=>{
        // 자동으로 e.preventdefault가 됌
        if(password !== passwordCheck){
            return setPasswordError(true)
        }
        if(!term){
            return setTermError(true)
        }

        console.log(email,nickName,password)
        dispatch({
            type: SIGN_UP_REQUEST,
            data: email, password, nickName
        })
    },[password, passwordCheck, term])

    const ErrorMessage = styled.div`
        color : red;
    `

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br/>
                    <Input name="user-email" value={email} type="email" required onChange={onChageEmail}/>
                </div>
                <div>
                    <label htmlFor="user-nickName">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickName} required onChange={onChageNickName}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password"  type="password" value={password} required onChange={onChagePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>열심히하겠습니까?</Checkbox>  
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type= "primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>

    )

}

export default Signup;