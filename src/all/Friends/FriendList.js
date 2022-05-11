import React , {useEffect, useState, Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


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

const MyProfileLine = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 25px 10px 10px;
margin-bottom: 15px;
margin-left: 15px;
height:60px;
&:hover {
    background-color: rgba(0,0,0,0.03);
}
`;

const MyProfileInfo = styled.div`
display: flex;
align-items: center;
`;

const MyProfileImg = styled(Link)`
margin-right: 20px;
object-fit: cover;
& img {
    border-radius: 20px;
    border:1px solid rgba(0,0,0,0.15);
    width:50px;
    height:50px;
}
`;

const MyProfileName = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const BorderMenu = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.15);
padding:10px;
span{margin-left:10px}
& span {
    color:rgba(0, 0, 0, 0.5);
}
`;

const FriendProfile = styled.div`
padding:0px 10px;
margin: 0px 10px;
`;

const FriendProfileLine = styled.div`
position:relative;
display:flex;
align-items: center;
height:50px;
width:100%;
padding:7px;
&:hover {
    background-color: rgba(0,0,0,0.03);
}
`;

const FriendProfileImg = styled(Link)`
margin-right: 12px;
object-fit: cover;
& img {
    border-radius: 20px;
    border:1px solid rgba(0,0,0,0.15);
    width:45px;
    height:45px;
}
`;

const FriendProfileName = styled.span`
display: flex;
justify-content: space-between;
align-items: center;
`;

const FriendProfileMusic = styled.a`
font-size:13px;
color:rgba(0,0,0,0.9);
position:absolute;
right:0;
padding:5px 10px;
margin-right:15px;
border:1.5px solid lightgreen;
border-radius: 40px;
text-decoration: none;
`;

const User = ( { user } ) => {

    return (
        <FriendProfileLine>
            <FriendProfileImg to = {`/friends/profile/${ user.id }`} > 
                <img src={ user.profileImg } alt="#" />
            </FriendProfileImg>
            <span style={{fontSize:14}}>{ user.name }</span>
            {/* 
            <img src={user.backgroundImg} alt="#"/> */}
            <FriendProfileMusic style={{fontSize:13}} href="https://www.melon.com/" target="_blank">{ user.profileMusic }
                <FontAwesomeIcon icon={faCaretRight} size='lg' style={{color: 'black', marginLeft:5}}/>
            </FriendProfileMusic>
        </FriendProfileLine>
    )
}


function FriendList() {

    
// let users = [
//     {
//         id : 1,
//         name : "gahyeon",
//         profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgM_D4xyNSB2zyXfDTtVc_Yyd5jO7C16884w&usqp=CAU",
//         backgroundImg : "https://i.pinimg.com/236x/84/70/68/847068eaec5f9a3a0cf99787d5d54bc3.jpg",
//         profileMusic : "Deserve You - Justin Bieber"
//     },
//     {
//         id : 2,
//         name : "dongjun",
//         profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI_qUM0fpK6shEJXR2SNjw56RTJ-4HeNvYXYlaibetTsXq7RKw6MncMzofpyw8-_6fLI&usqp=CAU",
//         backgroundImg : "https://i.pinimg.com/236x/84/70/68/847068eaec5f9a3a0cf99787d5d54bc3.jpg",
//         profileMusic : "Miracle - WayV"
//     },
//     {
//         id : 3,
//         name : "jisoo",
//         profileImg : "https://play-lh.googleusercontent.com/cnAY8F26OtYASqOoCKOZIJlk6gqocBWuTUcppOGF0woUlfCy7vIfJHMn1KTdjIYy9g",
//         backgroundImg : "https://i.pinimg.com/236x/84/70/68/847068eaec5f9a3a0cf99787d5d54bc3.jpg",
//         profileMusic : "Christmas tree - V"
//     },
//     {
//         id : 4,
//         name : "seonghun",
//         profileImg : "https://hellorabbit.kr/web/product/big/202010/8d017b2ff2490337cf5d241c5d687907.jpg",
//         backgroundImg : "https://i.pinimg.com/236x/84/70/68/847068eaec5f9a3a0cf99787d5d54bc3.jpg",
//         profileMusic : "16 Shots - Stefflon Don"
//     },
// ];

const [profile, setProfile] = useState();
const [myProfile, setMyProfile] = useState();

const getProfile = async () => {

    const response = await axios.get("http://kakao-clone-server.herokuapp.com/api/users");
    setProfile(response.data);
};

const getMyProfile = async () => {

    const response = await axios.get("http://kakao-clone-server.herokuapp.com/api/users/me");
    setMyProfile(response.data);
}

useEffect(() => {getProfile();}, []);
useEffect(() => {getMyProfile();}, []);


// const { id, name, age, profileImg, profileMusic, backgroundImg } = profile;

return (

    <div>
    <Headerline>
        <HeaderTitle>Friends</HeaderTitle>
        <HeaderIcon>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faUserPlus} />
        </HeaderIcon>
    </Headerline>

    <MyProfileLine>
        <MyProfileInfo>
            <MyProfileImg to = {`/friends/myprofile`}>
                <img src={myProfile && myProfile.profileImg} />
            </MyProfileImg>
            <MyProfileName >{myProfile && myProfile.name}</MyProfileName>
        </MyProfileInfo>
    </MyProfileLine>

    <BorderMenu>
        <span>Friends</span>
    </BorderMenu>

     <FriendProfile>
         {profile && profile.map(user => (
             <User user={user} key={user.id} />
         ))} 
     </FriendProfile>
    </div>
);

}

export default FriendList;

