import * as React from 'react';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AxiosService from "../../services/AxiosService";
import {useQuery} from "react-query";
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {useParams} from "react-router-dom";
import {UserPostContainer} from "../../containers/userPost";

function User() {

    const [user, setUser] = React.useState(null);
    const [posts, setPosts] = React.useState([]);
    const params = useParams();

    async function fetchUser() {
        // let results = await AxiosService.get(`/user/${params.id}/friends`);
        let results = await AxiosService.get(`/user/${params.id}`);
        console.log(results.data);
        setUser(results.data);

        AxiosService.get(`/post/${params.id}/user`).then((data) => {
            console.log(data);
            setPosts(data.data);
        });

        return results.data;
    }

    const feedItems = posts.map((post) =>
        <UserPostContainer key={post.id} post={post}></UserPostContainer>
    );

    const {isLoading, isFetching, isError, data, error} = useQuery('friend', fetchUser);

    if (isFetching) {
        return (
            <Box sx={{display: 'flex'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <Container component="main" sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <CssBaseline/>
            <Avatar>{user.firstName.substr(0, 1)}</Avatar>
            <Typography variant={'h2'}>{user.firstName + ' ' + user.lastName}</Typography>
            <Typography variant={'p'}>{user.id}</Typography>
            <Typography variant={'p'}>{user.email}</Typography>
            <Typography variant={'p'}>{user.phone}</Typography>

            <Typography variant={'h3'}>User Story</Typography>
            <div className={'fw'}>
                {feedItems}
            </div>
            {posts.length === 0 && <p>Nothing to show</p>}
        </Container>
    );
}

export {
    User
};