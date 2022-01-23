import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {UserPostContainer} from "../../containers/userPost";


export function Feed({posts}) {

    const feedItems = posts.map((post) =>
        <UserPostContainer key={post.id} post={post}></UserPostContainer>
    );

    return (
        <Container>
            <CssBaseline/>
            <Typography component="h1" variant="h5" sx={{ marginTop: '10px' }}>
                Your Feed
            </Typography>
            <Box sx={{mt: 1}}>
                {feedItems}
            </Box>
        </Container>
    );
}