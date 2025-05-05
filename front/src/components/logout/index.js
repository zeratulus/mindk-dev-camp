import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {useUser} from "../../hooks/user";
import {func} from "prop-types";

export function Logout() {

    sessionStorage.removeItem('user');

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <h2>Logged out.</h2>
        </Container>
    );

}