import React, { useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import UserContext from "../../context/user";
import {SignInContainer} from "../../containers/signIn";
import {SignUpContainer} from "../../containers/signUp";
import {ProfileContainer} from "../../containers/profile";
import {AddPostContainer} from "../../containers/addPost";
import {FeedContainer} from "../../containers/feed";

export function AppBody() {

    const user = useContext(UserContext);

    return (
        <div className="app-body">
            <Routes>
                <Route path="profile" element={<ProfileContainer />} />
                <Route path="addPost" element={<AddPostContainer />} />
                <Route path="feed" element={<FeedContainer />} />
                <Route path="login" element={<SignInContainer />} />
                <Route path="register" element={<SignUpContainer />} />
            </Routes>
        </div>
    );
}