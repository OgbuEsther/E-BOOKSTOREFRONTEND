import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import images from "../Assets/drip.png"
import axios from 'axios'

interface Iprops{
category
: 
string
description
: 
string
id
: 
number
image
: 
string
title
: 
string
}


const Booklist = () => {

    const [products, setProducts] = useState<Iprops[] | null>()

    useEffect(() => {
        const url = "https://fakestoreapi.com/products"
        axios.get(url).then((response) => {
            setProducts(response.data)
        })
    }, [])
  return (
    <Container>
        <Card>
            <ImageHolder>
                <Img src={images}/>
                <Cont>
                    <Button>{products ? products.map((el) => {
                        return <div>{el.category}</div>
                    }): null}</Button>
                    <TitleHold>
                        <Title>Life is a yam and egg</Title>
                    </TitleHold>
                </Cont>
                <Cards>
                    up
                </Cards>
            </ImageHolder>
            <Downpart>
                <Hold>
                    <Authorimage></Authorimage>
                <Authorname>
                    {products ? products.map((el) => {
                        return <p>{el.description}</p>
                    }) : null}
                </Authorname>
                </Hold>
                <View></View>
            </Downpart>
        </Card>
        
    </Container>
  )
}

export default Booklist
const Cards = styled.div`
    width: 400px;
    height: 100%;
    /* border-radius: 10px; */
    display: flex;
    background-color: green;
    position: absolute;
    top: 0;
`
const View = styled.div``
const Authorname = styled.div``
const Authorimage = styled.div``
const Hold = styled.div``
const Downpart = styled.div``
const Title = styled.div`
    position: absolute;
    bottom: 10px;
`
const TitleHold = styled.div`
    opacity: 0;
    height: 150px;
    color: white;
    /* background: rgb(6,6,6); */
    background-image: linear-gradient(0deg, rgba(6,6,6,1) 0%, rgba(15,15,15,0) 100%);
    transition: all 350ms;
    position: relative;
    :hover{
        opacity: 1;
    }
`
const Button = styled.div`
    margin: 10px;
    background-color: #919293;
    width: 130px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    overflow: hidden;

`
const Cont = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    /* background-color: red; */
`
const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const ImageHolder = styled.div`
    height: 200px;
    width: 100%;
    background-color: silver;
    position: relative;

    &hover ~ ${TitleHold} {
        display: flex;
    }
`
const Card = styled.div`
    /* height: 200px; */
    width: 300px;
    /* border: 1px solid silver; */
    /* background-color: red; */
`

const Container = styled.div`
    margin-top: 80px;
    padding-bottom: 30px;
    padding: 20px;
    /* background-color: blue; */
    display: flex;
`