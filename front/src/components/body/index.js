import React from 'react';
import { Routes, Route } from "react-router-dom";
import {SignInContainer} from "../../containers/signIn";
import {SignUpContainer} from "../../containers/signUp";
import {ProfileContainer} from "../../containers/profile";
import {AddPostContainer} from "../../containers/addPost";
import {FeedContainer} from "../../containers/feed";
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from "../errorFallback";

export function AppBody() {

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback('')}>
            <div className="app-body">
                <Routes>
                    <Route path="/" element={<FeedContainer />} />
                    <Route path="feed" element={<FeedContainer />} />
                    <Route path="profile" element={<ProfileContainer />} />
                    <Route path="addPost" element={<AddPostContainer />} />
                    <Route path="signin" element={<SignInContainer />} />
                    <Route path="signup" element={<SignUpContainer />} />
                    <Route path="*" element={<ErrorFallback message={'404 - Page not found'} />} />
                </Routes>
            </div>
        </ErrorBoundary>
    );
}