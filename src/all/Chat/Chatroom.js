import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: lightblue;
display: flex;
flex-direction: column;
`;

const Headerline = styled.div`
display: flex;
justify-content: space-between; 
align-items: center; 
padding: 0px 25px;
`;

const HeaderTitle = styled.h2`
font-size: 20px;
`;

const HeaderIcon = styled.div`
display:flex;
justify-content: space-between; 
gap:20px;
`;

const Date = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
background-color: rgba(0,0,0,0.18);
padding:3px 0px;
border-radius: 50px;
width:110px;
font-size: 15px;
`;

const MyChat = styled.div`
`;

const MyChatProfile = styled.img`
`;

const MyChatting = styled.div`
`;

const MyChattingName = styled.div`
`;

const MyChattingBox = styled.div`
`;

const MyChattingBox1 = styled.div`
`;

const MyChattingBoxTime = styled.div`
`;

function Chatroom() { return (
    <Container>
    <Headerline>
        <HeaderIcon>
            <FontAwesomeIcon icon={faChevronLeft} />
        </HeaderIcon>
        <HeaderTitle>dongjun</HeaderTitle>
        <HeaderIcon>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faBars} />
        </HeaderIcon>
    </Headerline>

    <Date>Jan, 6, 2022</Date>
    <MyChat>
        <MyChatProfile />
        <MyChatting>
            <MyChattingName></MyChattingName>
            <MyChattingBox>
                <MyChattingBox1></MyChattingBox1>
                <MyChattingBoxTime></MyChattingBoxTime>
            </MyChattingBox>
        </MyChatting>
    </MyChat>
    </Container>
);}

export default Chatroom;