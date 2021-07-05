import styled , {createGlobalStyle}  from "styled-components";
import { CloseOutlined } from '@ant-design/icons'


export const Overlay = styled.div`
    position: fixed;
    z-index : 5000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
export const Header = styled.header`
    height: 44px;
    background: white;
    position: relative;
    padding: 0;
    text-align: center;

    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px
    }

  
`

export const SlickWrapper = styled.div`
    /* height: calc(100%-44px); */
    height: 100vh;
    /* background: #090909; */
    background-color: rgba( 051 , 051, 051, 0.5 );
    /* opacity: 0.5; */

`

export const ImgWrapper = styled.div`
    padding: 32px;
    text-align: center;  

    & img {
        margin: 0 auto;
        max-height: 750px;
    }
`

export const CloseBtn = styled(CloseOutlined)`
        position: absolute;
        right:0;
        top:0;
        padding: 15px;
        line-height: 14px;
        cursor: pointer;
`

//글로벌 스타일 설정하기
// 완성된 스타일 컴터넌트는 컴터넌트 내부 아무곳에다가 넣어주면된다.
//우리가 평소에 사용하는 스타일컴포넌트는 스코프가 적용된거임.
export const Global = createGlobalStyle`
/* 클래스 네임으로 설정 */
    .slick-slide{
        display: flex;
    }

    /* .slick-arrow slick-prev{
        
    } */
     /* .slick-arrow slick-next{

    } */
    /* .slick-slider.slick-initialized {
    height: 100vh;
    } */
    /* .slick-slider{
        display: inline-block;
    } */
    /* .ant-card-cover{
        transform: none !important;
    } */
`