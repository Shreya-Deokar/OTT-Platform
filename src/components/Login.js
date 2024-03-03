import React from 'react'
import styled from 'styled-components'

function login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premium to Raya  and the last Dragon  Get Premium to Raya  and the last Dragon
                Get Premium to Raya  and the last Dragon  Get Premium to Raya  and the last Dragon
                Get Premium to Raya  and the last Dragon

            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default login

const Container=styled.div`
    position:fixed;
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    &:before{
        background-position:top;
        background-size:cover;
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity:0.8;
        background-image:url("./images/login-background.jpg");
        z-index:-1;
    }
`

const CTA=styled.div`
    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
  
`
const CTALogoOne=styled.img`
`
const CTALogoTwo=styled.img`
    width:90%;
`
const SignUp=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    border-radius:5px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background-color:#0483ee;
    }
`
const Description=styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5
`