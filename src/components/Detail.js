import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';
import { Link } from 'react-router-dom';

function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState()

    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            }
            else
            {

            }
        })
    }, [])


  return (
  <Container>
    {
        movie && (
            <>
            
            <Background>
                <img src= {movie.BackgroundImg}></img>
            </Background>
            <ImageTitle>
                <img src= {movie.TitleImg}></img>
            </ImageTitle>
            <Controls>
            <a href={movie.MovieLink}>
                <PlayButton>
                    <img src="/images/play-icon-black.png"></img>
                        PLAY
                </PlayButton>
            </a>
                <a href={movie.Trailer}>
                <TrailerButton>
                <img src="/images/play-icon-white.png"></img>
                        Trailer
                </TrailerButton>
                </a>
            </Controls>
            <SubTitle>
                {movie.SubTitle}
            </SubTitle>
            <Description>
                {movie.Description}
            </Description>

            </>
        )
    }


    

  </Container>
  )
}

export default Detail

const Container= styled.div`
min-height:calc(100vh);
padding:0px calc(3.5vw);
position:relative;
`
const Background=styled.div`
position:fixed;
top:0px;
left:0;
bottom:0;
right:0;
z-index:-1;

img{
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0.8;
}
`
const ImageTitle=styled.div`
    height:60vh;
    min-height:170px;
    width:20vw;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls=styled.div`
    display:flex;
    align-items:center;

`

const PlayButton=styled.button`
    border-radius:4px;
    font-size:15px;
    padding: 0px 24px;
    margin-right:24px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    
    &:hover{
        background:rgb(198,198,198);
    }
`
const TrailerButton=styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid white;
    color:white;
    text-transform:uppercase;
`
const SubTitle=styled.div`
    color:rgb(249,249,249)
    font-size:30px;
    min-height:20px;
    margin-top:26px;
`
const Description=styled.div`
    line-height:1.4;
    width:45%;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249)
`