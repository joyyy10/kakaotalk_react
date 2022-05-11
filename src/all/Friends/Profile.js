import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faComment, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


function Profile() {

    let { friend_id } = useParams();

    const [detail, setDetail] = useState();

    const getDetail = async () => {
        const response = await axios.get(`http://kakao-clone-server.herokuapp.com/api/users/user`,
        { params: { id: `${ friend_id }`}});

        setDetail(response.data);
    }

    useEffect(() => {getDetail();}, []);

    return (
                <Body>
                    <BackImg src={detail && detail.backgroundImg} />
                    <ProfileBox>
                        <ProfileImg src={detail && detail.profileImg} />
                        <ProfileName>{detail && detail.name}</ProfileName>
                     </ProfileBox>
                     <MusicBox>{detail && detail.profileMusic}
                     <FontAwesomeIcon icon={faCaretRight} size='lg' style={{color: 'white', marginLeft:10}}/>
                     </MusicBox>
                    <ProfileEditBox>
                        <EditBox>
                            <FontAwesomeIcon icon={faComment} size='lg' style={{color: 'white'}}/>
                            <span style={{color: 'white'}}>1:1 Chatting</span>
                        </EditBox>
                        <EditBox>
                            <FontAwesomeIcon icon={faPhoneAlt} size='lg' style={{color: 'white'}}/>
                            <span style={{color: 'white'}}>Voice Call</span>
                        </EditBox>
                    </ProfileEditBox>
                 </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
margin: 0;
padding: 0;
position: relative;
/* -ms-overflow-style:none;
scrollbar-width: none;
-webkit-scrollbar{display:none;} */
`;

const ProfileBox = styled.div`
position: fixed;
margin-top: 500px;
margin-left: 280px;
display: flex;
justify-content: center;
align-items: center;
`;

const BackImg = styled.img`
height: 100vh;
width: 100%;
position: absolute;
object-fit: cover;
object-position: center;
background-size: contain;
`;

const ProfileImg = styled.img`
height: 180px;
width: 180px;
border-radius: 40%;
position: absolute;
`;

const ProfileName = styled.div`
position: absolute;
font-size: 25px;
width: 80px;
margin-top: 260px;
color:white;
`;

const MusicBox = styled.div`
position: fixed;
display: flex;
font-size:13px;
color:rgba(0,0,0,0.9);
position:absolute;
margin-right: 50px;
top: 100px;
right: 0;
padding:5px 10px;
border:1.5px solid lightgreen;
border-radius: 40px;
color: white;
`;

const ProfileEditBox = styled.div`
position: fixed;
display: flex;
justify-content: space-evenly;
bottom: 0;
width: 100%;
height: 120px;
padding: 25px 50px;
box-sizing: border-box;
border-top: 1px solid rgba(255,255,255,0.3);
`;

const EditBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly; 
align-items: center; 
`;

export default Profile;

// 각 유저 한 명의 정보 불러오는 것이기 때문에 map 사용하면 안됨 !