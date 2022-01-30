import {Post} from "../../components/post";
import {useUser} from "../../hooks/user";
import React from "react";
import AxiosService from "../../services/AxiosService";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {Preloader} from "../../components/preloader";
import {PV_PUBLIC} from "../../utils";

export function PostContainer() {
    const [user, setUser] = useUser();
    const params = useParams();
    const editorRef = React.useRef(null);

    async function fetchPost() {
        if (params.id) {
            let response = await AxiosService.get(`/post/${params.id}`);
            return response.data;
        } else {
            return {
                body: 'Write something here =]',
                visibilityId: PV_PUBLIC.id
            }
        }
    }

    const {isFetching, data} = useQuery('post' + params.id, fetchPost);

    if (isFetching)
        return <Preloader/>

    return <Post
        post={data}
        editorRef={editorRef}
        userId={user.data.id}
    />;
}