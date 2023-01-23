import React from 'react'
import styled from 'styled-components'
import images from "../Assets/drip.png"

const Create = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Circle>B</Circle>
                <Name><h2>Savy Savio</h2></Name>
            </Top>
            <ImageHold>
                <Images src={images} />
            </ImageHold>
            <ReadHold>
                <Read><h2>READ ME</h2></Read>
                <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam doloribus rerum ducimus natus earum rem fugit nulla sed quas, commodi repellendus blanditiis, fugiat placeat odio, unde assumenda neque provident atque.</P>
            </ReadHold>
        </Wrapper>
    </Container>
  )
}

export default Create
const P = styled.div`
`
const ReadHold = styled.div`
    width: 100%;
`
const Read = styled.div`
    
`
const Images = styled.img`
    height: 400px;
`
const ImageHold = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    background-color: #E0E0E0;
`
const Name = styled.div`
    display: flex;
    h2{
        margin-left: 10px;
    }
`
const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: #EA4C89;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
`
const Top = styled.div`
    width: 470px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: gray; */
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 15px;
`