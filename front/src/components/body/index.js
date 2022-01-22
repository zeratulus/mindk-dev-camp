import React from 'react';
import { Routes, Route } from "react-router-dom";
import {SignInContainer} from "../../containers/signIn";
import {SignUpContainer} from "../../containers/signUp";
import {ProfileContainer} from "../../containers/profile";
import {AddPostContainer} from "../../containers/addPost";
import {FeedContainer} from "../../containers/feed";
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from "../errorFallback";
import {Logout} from "../logout";
import {FriendsContainer} from "../../containers/friends";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {UserContainer} from "../../containers/user";

export function AppBody() {

    return (
        <Container component="main">
            <CssBaseline />
            <ErrorBoundary FallbackComponent={ErrorFallback('')}>
                <Routes>
                    <Route path="/" element={<ErrorFallback message={'Not yet implemented =['} />} />
                    <Route path="feed" element={<FeedContainer />} />
                    <Route path="user/:id" element={<UserContainer />} />
                    <Route path="friends" element={<FriendsContainer />} />
                    <Route path="profile" element={<ProfileContainer />} />
                    <Route path="addPost" element={<AddPostContainer />} />
                    <Route path="signin" element={<SignInContainer />} />
                    <Route path="signup" element={<SignUpContainer />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="*" element={<ErrorFallback message={'404 - Page not found'} />} />
                </Routes>
            </ErrorBoundary>
        </Container>
    );
}