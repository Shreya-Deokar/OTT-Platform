import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png"></img>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png"></img>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png"></img>
        </Wrap>
        
    </Container>
  )
}

export default Viewers

const Container=styled.div`
margin-top:30px; 
display:grid;
grid-gap:25px;
padding:30px 0px 26px;
grid-template-columns:repeat(4,minmax(0,1fr));
`

const Wrap=styled.div`
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:500ms;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform:scale(1.05);
        cursor:pointer;
        border:3px solid rgba(249,249,249,0.8);

    }
`