import React,{useCallback, useState} from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const Signup=() =>{
    const [id, onChageId] = useInput('')
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



    const onSubmit = useCallback(()=>{
        // 자동으로 e.preventdefault가 됌
        if(password !== passwordCheck){
            return setPasswordError(true)
        }
        if(!term){
            return setTermError(true)
        }

        console.log(id,nickName,password)
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
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChageId}/>
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
                    <Button type= "primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>

    )

}

export default Signup;