import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Headerline = styled.div`
display: flex;
justify-content: space-between; 
align-items: center; 
padding: 0px 25px;
`;

const HeaderTitle = styled.h2`
font-size: 28px;
`;

const HeaderIcon = styled.div`
display:flex;
justify-content: space-between; 
gap:20px;
`;

const FriendProfile = styled.div`
padding:0px 10px;
`;

const FriendProfileLine = styled(Link)`
position:relative;
display:flex;
align-items: center;
height:50px;
width:100%;
padding:7px;
text-decoration: none;
&:hover {
    background-color: rgba(0,0,0,0.03);
}
`;

const FriendProfileImg = styled.div`
margin-left: 10px;
margin-right: 12px;
object-fit: cover;
& img {
    border-radius: 18px;
    width:45px;
    height:45px;
}
`;

const ChattingDiv = styled.div`
margin-left: 10px;
`;

const FriendName = styled.div`
color:black;
font-size:15px;
margin-bottom:2px;
`;

const Time = styled.div`
color:rgba(0,0,0,0.3);
font-size:13px;
position:absolute;
right:0;
margin-right: 30px;
`


function User({ user }) {
    return (
        <FriendProfileLine to="/chat/chatroom">
            <FriendProfileImg>
                <img src={user.profileImg} alt="#" />
            </FriendProfileImg>

            <ChattingDiv>
            <FriendName>{user.name}</FriendName>
            <FriendName style={{color: 'gray'}}>{user.recentChat}</FriendName>
            </ChattingDiv>

            <Time>{user.time}</Time>
        </FriendProfileLine>
    );
}

const chattingroom = [
    {
        id : 1,
        name : "jisoo",
        profileImg : "https://play-lh.googleusercontent.com/cnAY8F26OtYASqOoCKOZIJlk6gqocBWuTUcppOGF0woUlfCy7vIfJHMn1KTdjIYy9g",
        time : "10:50 PM",
        recentChat : "Happy~"
    },
    {
        id : 2,
        name : "dongjun",
        profileImg :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI_qUM0fpK6shEJXR2SNjw56RTJ-4HeNvYXYlaibetTsXq7RKw6MncMzofpyw8-_6fLI&usqp=CAU",
        time : "4:35 PM",
        recentChat : "Hello ! Nice to meet you :)"
    }
];

function Chatting() { return (

<div>
<Headerline>
    <HeaderTitle>Chats</HeaderTitle>
    <HeaderIcon>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faComments} />
        <FontAwesomeIcon icon={faPlus} />
    </HeaderIcon>
</Headerline>

<FriendProfile>
         {chattingroom.map(user => (
             <User user={user} key={user.id} />
         ))}
</FriendProfile>
</div>

);}

export default Chatting;