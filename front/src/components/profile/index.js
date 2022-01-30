import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Card from "@mui/material/Card";
import ProfileTabs from "./tabs";

function Profile() {

    return (
        <Container component="main">
            <CssBaseline />
            <Card
                sx={{
                    mt: 10,
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <ProfileTabs />
            </Card>
        </Container>
    );
}

export {
    Profile
};