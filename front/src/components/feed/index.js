import * as React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {UserPostContainer} from "../../containers/userPost";
import AxiosService from "../../services/AxiosService";
import {CircularProgress} from "@mui/material";
import {Preloader} from "../preloader";


export function Feed() {

    const [posts, setPosts] = React.useState([]);

    const fetchPosts = async () => {
        let posts = await AxiosService.get('/post');
        setPosts(posts.data);
    };

    const { isLoading, isFetching, isError, data, error } = useQuery('posts', fetchPosts);

    const feedItems = posts.map((post) =>
        <UserPostContainer key={post.id} post={post}></UserPostContainer>
    );

    if (isFetching) {
        return (<Preloader/>);
    }

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