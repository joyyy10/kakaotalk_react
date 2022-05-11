import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faMusic, faQrcode, faBullhorn, faFlask, faInfoCircle, faLock, faAdjust, faBrush, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser, faComment }  from "@fortawesome/free-regular-svg-icons";

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

const Line = styled.div`
position:relative;
display:flex;
align-items: center;
height:50px;
width:100;
padding:7px 23px;
&:hover {
    background-color: rgba(0,0,0,0.05);
}
`;

const LineName = styled.div`
margin-left: 18px;
font-size:16px;
`;

const LineRight = styled.div`
font-size:16px;
color:gray;
position:absolute;
right:0;
margin-right:30px;

`;

const BorderLine = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.15);
padding:10px 10px 0px 10px;
margin-top:10px;
`;


function Setting() { return (
<div>
<Headerline>
    <HeaderTitle>Setting</HeaderTitle>
    <HeaderIcon>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faMusic} />
        <FontAwesomeIcon icon={faQrcode} />
        <FontAwesomeIcon icon={faPlus} />
    </HeaderIcon>
</Headerline>

<Line>
    <FontAwesomeIcon icon={faBullhorn} style={{color: 'gray'}} />
    <LineName>Notice</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faFlask} style={{color: 'gray'}} />
    <LineName>Kakao Lab</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faInfoCircle} style={{color: 'gray'}} />
    <LineName>Version</LineName>
    <LineRight>Ver. 3.3.6.2992</LineRight>
</Line>
<BorderLine></BorderLine>
<Line>
    <FontAwesomeIcon icon={faLock} style={{color: 'gray'}} />
    <LineName>Privacy</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faBell} style={{color: 'gray'}} />
    <LineName>Notifications</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faUser} style={{color: 'gray'}} />
    <LineName>Friends</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faComment} style={{color: 'gray'}} />
    <LineName>Chats</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faAdjust} style={{color: 'gray'}} />
    <LineName>Display</LineName>
</Line>
<Line>
    <FontAwesomeIcon icon={faBrush} style={{color: 'gray'}} />
    <LineName>Theme</LineName>
    <LineRight>Simple</LineRight>
</Line>
<Line>
    <FontAwesomeIcon icon={faPhoneAlt} style={{color: 'gray'}} />
    <LineName>Call</LineName>
</Line>
</div>
);}

export default Setting;