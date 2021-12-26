import {SignInContainer} from "../../containers/signIn";
import {SignUpContainer} from "../../containers/signUp";
import {UserPostContainer} from "../../containers/userPost";

export function AppBody() {
    return (
        <div className="app-body">
            <SignInContainer></SignInContainer>
            <SignUpContainer></SignUpContainer>
            <UserPostContainer content={'Just some example content of UserPost'}></UserPostContainer>
        </div>
    );
}