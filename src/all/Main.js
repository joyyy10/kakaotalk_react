import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: lightyellow;
margin: 0;
`;

const Login = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;

const LoginTitle = styled.div`
margin-top:130px;
margin-bottom: 25px;
font-size: 25px;
`;

const LoginText = styled.div`
width: 60%;
opacity: 0.7; 
font-size: 17px;
margin-bottom: 40px;
`;

const LoginBox = styled.div`
display: flex;
flex-direction: column;
margin: 0px 30px;
`;

const LoginBoxID = styled.input`
background-color: lightyellow;
border: none;
font-size: 18px;
padding: 15px 0px;
margin-bottom: 25px;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const LoginBoxPW = styled.input`
background-color: lightyellow;
border: none;
font-size: 18px;
padding: 15px 0px;
margin-bottom: 25px;
color: rgba(0, 0, 0, 0.4);
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const LoginBoxSubmit = styled.button`
text-align: center;
background-color: yellow;
border-color: gray;
padding: 20px 0px;
margin-top: 15px;
margin-bottom: 40px;
border-radius: 7px;
`;

const LoginBoxFind = styled(Link)`
text-align: center;
text-decoration: none;
color: inherit;
font-size: 16px;
`;


function Main() { return (
    <Container>
        <Login>
            <LoginTitle>KAKAO</LoginTitle>
            <LoginText>Log in with your email or phone number  . . .</LoginText>
        </Login>
        <LoginBox>
            <LoginBoxID type='text' placeholder='Email or phone number' />
            <LoginBoxPW type='password' placeholder='Password' />
            <LoginBoxSubmit>Log In</LoginBoxSubmit>
            <LoginBoxFind to="/">Find My Kakao Account or Passward</LoginBoxFind>
        </LoginBox>
    </Container>
);}

export default Main;