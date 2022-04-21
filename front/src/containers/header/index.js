import {AppHeader} from "../../components/header";
import {useUser} from "../../hooks/user";
import React from "react";

export function AppHeaderContainer() {
    //TODO: Fix bug with not re-render headerMenu on login =[
    const [user, setUser] = useUser();
    const [isLogged, setIsLogged] = React.useState(user.isLogged);

    return (
        <AppHeader user={user} isLogged={isLogged}/>
    );
}