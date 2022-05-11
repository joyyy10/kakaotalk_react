import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chatting from "./all/Chat/Chatting";
import Chatroom from "./all/Chat/Chatroom";
import FriendList from "./all/Friends/FriendList";
import Profile from "./all/Friends/Profile";
import Setting from "./all/More/Setting";
import Login from "./all/Login";
import Main from "./all/Main";
import Navigationbar from "./Navigationbar";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}
` // 전체 화면 margin 없애기 !!

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Navigationbar />
    <Routes>
        <Route path="/chatting" exact element={<Chatting />} />
        <Route path="/chat/chatroom" exact element={<Chatroom />} />
        <Route path="/friends/friendList" exact element={<FriendList />} />
        <Route path="/friends/profile/:friend_id" exact element={<Profile />} />
        <Route path="/setting" exact element={<Setting />} />
        <Route path="/" exact element={<Main />} />
        <Route path="/login" exact element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
