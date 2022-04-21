import {Friends} from "../../components/friends";
import * as React from "react";
import AxiosService from "../../services/AxiosService";
import {useQuery} from "react-query";
import {Preloader} from "../../components/preloader";

export function FriendsContainer() {
    const [friends, setFriends] = React.useState([]);

    async function fetchFriends () {
        //todo: implement API method
        // const results = await AxiosService.get('/user/:id/friends');
        const results = await AxiosService.get('/user');
        setFriends(results.data);
    }

    const { isFetching } = useQuery('friends', fetchFriends);

    if (isFetching) {
        return (<Preloader/>);
    }

    return <Friends friends={friends}/>;
}