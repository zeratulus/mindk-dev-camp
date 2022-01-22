import React from "react";
import {getUserFromStorage} from "../utils";

function useUser() {
    const [user, setUser] = React.useState(getUserFromStorage());
    return [user, setUser];
}

export {
    useUser
}