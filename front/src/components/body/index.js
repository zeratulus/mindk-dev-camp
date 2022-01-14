import React, { useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import UserContext from "../../context/user";
import {SignInContainer} from "../../containers/signIn";
import {SignUpContainer} from "../../containers/signUp";
import {ProfileContainer} from "../../containers/profile";
import {AddPostContainer} from "../../containers/addPost";
import {FeedContainer} from "../../containers/feed";
import Test from "../test";

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
                <Route path="/posts/num/:id" element={<Test />} />
                <Route path="/posts/upperaz/:id" element={<Test />} />
                <Route path="/posts/file/:id" element={<Test />} />
                <Route path="/posts/date/:id" element={<Test />} />
            </Routes>
        </div>
    );
}