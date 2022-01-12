import React, { useContext } from 'react';
import UserContext from "../../context/user";
import { Context } from "../../context/context";
import {SignInContainer} from "../../containers/signIn";
import {SignUpContainer} from "../../containers/signUp";
import {UserPostContainer} from "../../containers/userPost";
import {ProfileContainer} from "../../containers/profile";
import {AddPostContainer} from "../../containers/addPost";

export function AppBody() {

    const user = useContext(UserContext);
    const [context, setContext] = useContext(Context);

    return (
        <div className="app-body">
            {(context === 'profile') && <ProfileContainer></ProfileContainer>}
            {(context === 'add_post') && <AddPostContainer></AddPostContainer>}
            {(context === 'feed') && <UserPostContainer content={'Just some example content of UserPost'}></UserPostContainer>}
            {/*<SignInContainer></SignInContainer>*/}
            {/*<SignUpContainer></SignUpContainer>*/}
        </div>
    );
}