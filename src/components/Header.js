import React, {useEffect} from 'react'
import { auth,provider } from '../firebase';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"

function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        dispatch(setUserLogin({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL
        }))
        navigate('/')
      }
    })
  },[])

  const signIn = () =>{
    auth.signInWithPopup(provider)
    .then((result) => {
      let user=result.user;
      dispatch(setUserLogin({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL
      }))
      navigate("/")
    })
  }

const signOut = () => {
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      navigate("/login")
    })
  }

  return (
   <Nav>
    <Logo src="/images/logo.svg"/>

    { !userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer> 
        ):  
    <>
      <NavMenu>
      <a>
        <i className='fa fa-home fa-lg'></i>
        <p>Home</p>
      </a>
      <a>
        <i className='fa fa-plus fa-lg'></i>
        <p>WatchList</p>
      </a>
      <a>
        <i className='fa fa-search fa-lg'></i>
        <p>Search</p>
      </a>
      <a>
        <i className='fa fa-film fa-lg'></i>
        <p>Movies</p>
      </a>
    </NavMenu>
    <UserImg onClick={signOut} src={userPhoto}/>
    </>
  
    }
   </Nav>
  )
}

export default Header
const Nav=styled.nav`
height:100px;
background:#090b13;
display:flex;
align-items:center;
padding: 0 36px;
`
const Logo=styled.img`
height:50px;

`

const NavMenu=styled.div`
  display:flex;
  padding:20px;
  flex:1;
  margin-left:25px;
  align-items:center;
  a{
    display:flex;
    align-items:center;
    padding:0 12px;
    margin:12px;
    cursor:pointer;
  }

  p{
    font-size:13px;
    padding:12px;
    letter-spacing:1.42px;
  }
  p:hover{
    text-decoration:underline;
    text-decoration-thickness:0.1rem;
    color:#00ace6;
  }

  p,a:hover{
    transform:scale(1.2);
  }
`

const UserImg=styled.img`
  width:48px;
  heigth:48px;
  border-radius:50%;
  cursor:pointer;
  
`

const Login = styled.div`
  border : 1px solid #f9f9f9;
  padding : 8px 16px;
  border-radius : 4px;
  letter-spacing : 1.5px;
  text-transform : uppercase;
  background-color : rgba(0,0,0,0.6);
  transition : all 0.2s ease 0s;
  cursor : pointer;

  &:hover{
    background-color : #f9f9f9f9;
    color : #000;
    borser-color : transparent;
  }
`

const LoginContainer = styled.div`
  flex : 1;
  display : flex;
  justify-content : flex-end;
`