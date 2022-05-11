import React , { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUsers, faCog, faAngleLeft } from "@fortawesome/free-solid-svg-icons";



const Navbar = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
bottom: 0;
width: 100%;
background-color: #f9f9fa;
padding: 25px 50px;
box-sizing: border-box;
border-top: 1px solid rgba(121, 121, 121, 0.3);
`;

const NavbarIcon = styled.div`
display: flex;
position: relative;
`;

const NavbarLink = styled(Link)`
color: gray;
${(props) => props.isSelected && css`
color: black;`};
`;


function Navigationbar() {

    const [clicked, setClicked] = useState();

    return (
        <Navbar>
            <div>
            <NavbarIcon>
                <NavbarLink isSelected={clicked===0} onclick = {() => setClicked(0)} to="/">
                    <FontAwesomeIcon icon={faAngleLeft} size='lg'/>
                </NavbarLink>
            </NavbarIcon>
            </div>
            <div>
            <NavbarIcon>
                <NavbarLink onclick = {() => setClicked(1)} isSelected={clicked===1}  to="/friends/friendList">
                    <FontAwesomeIcon icon={faUsers} size='lg'/>
                </NavbarLink>
            </NavbarIcon>
            </div>
            <div>
            <NavbarIcon>
                <NavbarLink isSelected={clicked===2} onclick = {() => setClicked(2)} to="/chatting">
                    <FontAwesomeIcon icon={faComment} size='lg'/>
                </NavbarLink>
            </NavbarIcon>
            </div>
            <div>
            <NavbarIcon>
                <NavbarLink isSelected={clicked===3} onclick = {() => setClicked(3)} to="/setting">
                    <FontAwesomeIcon icon={faCog} size='lg'/>
                </NavbarLink>
            </NavbarIcon>
            </div>
        </Navbar>
    );
}

export default Navigationbar;