import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {UserPostContainer} from "../../containers/userPost";

export function Feed() {

    let posts = [];

    return (
        <Container>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Your Feed
                </Typography>
                <Box sx={{ mt: 1 }}>

                    <UserPostContainer content={'Just some example content of UserPost'}></UserPostContainer>

                    <UserPostContainer content={'Just some example content of UserPost'}></UserPostContainer>

                </Box>
            </Box>
        </Container>
    );
}