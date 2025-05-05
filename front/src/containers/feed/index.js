import {Feed} from "../../components/feed";
import React from "react";
import {Preloader} from "../../components/preloader";
import AxiosService from "../../services/AxiosService";
import {useQuery} from "react-query";

export function FeedContainer() {

    const [posts, setPosts] = React.useState([]);

    const fetchPosts = async () => {
        const posts = await AxiosService.get('/post');
        setPosts(posts.data);
    };

    const { isFetching } = useQuery('posts', fetchPosts);

    if (isFetching) {
        return (<Preloader/>);
    }

    return (
        <Feed posts={posts}/>
    );
}