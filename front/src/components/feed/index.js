import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {UserPostContainer} from "../../containers/userPost";

export function Feed() {

    const [posts, setPosts] = React.useState(
        [
            {
                id: 'uuid::v4::here::1',
                body: 'Just some example content of UserPost',
                createdAt: '18.01.2022',
                userId: 'uuid::v4::here',
                firstName: 'Serhii',
                lastName: 'Herenko',
            },
            {
                id: 'uuid::v4::here::2',
                body: 'Just some another example content of UserPost... =]',
                createdAt: '18.01.2022',
                userId: 'uuid::v4::here',
                firstName: 'John',
                lastName: 'Joe',
            }
        ]
    );

    const feedItems = posts.map( (post) =>
        <UserPostContainer key={post.id} post={post}></UserPostContainer>
    );

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
                    {feedItems}
                </Box>
            </Box>
        </Container>
    );
}