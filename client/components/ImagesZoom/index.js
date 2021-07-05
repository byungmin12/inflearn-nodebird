import { CloseOutlined } from '@ant-design/icons'
import React,{useState} from 'react'
import Slick from 'react-slick'
import styled, {createGlobalStyle} from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';


function ImagesZoom({images, onClose}) {
    const [currentState, setCurrentState] = useState(0)
    return (
        <Overlay>
            
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>x</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                <Global/>
                    <Slick 
                        initialSlide={0}
                        beforeChange={slide => setCurrentState(slide)}
                        infinite
                        dots={true}
                        speed={500}
                        // slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map(el=> <ImgWrapper key={el.src}>
                                            <img src={el.src} alt={el.src}/>
                                         </ImgWrapper>)}
                    </Slick>
                  
                </div>
            </SlickWrapper>
        </Overlay>
    )
}

export default ImagesZoom
