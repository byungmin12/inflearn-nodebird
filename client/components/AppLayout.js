import React ,{ useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd"
import UserProfile from '../components/Userprofile'
import LoginForm from '../components/LoginForm'
import styled from 'styled-components';
import {useSelector} from 'react-redux'
import { createGlobalStyle } from 'styled-components';


const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

const Asd = styled(Col)` 
    text-align : center;
 `;

 const Global = createGlobalStyle`
    .ant-row{
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col:first-child{
        padding-left: 0 !important;

    }
    .ant-col::last-child{
        padding-right: 0 !important;
    }
 `




/* const style = useMemo(()=> ({textAlign : 'center'}), []) */

const AppLayout = ({ children}) =>{
    const { me } = useSelector((state) => state.user)
    return (
        <div>
            <Global/>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                     <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>

            </Menu>
            {/* gutter는 컬럼 사이의 간격 */}
            <Row gutter={8}  >
                <Col xs={24} md={6}>
                    {me ? <UserProfile  /> : <LoginForm  />}
                </Col>
                <Asd xs={24} md={12} >
                    {children}
                </Asd>
                <Col xs={24} md={6}>
                    <a href="https://github.com/byungmin12" target="_blank" rel="noreferrer noopener">Made by Min</a>
                </Col>

            </Row>
          
        </div>
    )
}


AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout