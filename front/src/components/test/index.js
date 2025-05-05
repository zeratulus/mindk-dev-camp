import {useParams} from "react-router-dom";

export default function Test() {
    const params = useParams();

    let path = window.location.pathname.split('/');
    let chk = path[path.length - 1]

    //Digits
    if (chk.match(/^\d+$/)) {
        return <h2>Digit Id -> <b>{params.id}</b></h2>;
    }

    //Uppercase
    if (chk.match(/^[A-Z]+$/)) {
        return <h2>Uppercase A-Z Id -> <b>{params.id}</b></h2>;
    }

    //Uppercase
    if (chk.match(/^[a-zA-Z0-9]+\.(doc|jpg|jpeg|pdf)$/)) {
        return <h2>Filename with ext Id -> <b>{params.id}</b></h2>;
    }

    //Date
    if (chk.match(/^\d{4}-\d{2}-\d{2}$/)) {
        if (new Date(chk) < new Date())
            return <h2>Date Id -> <b>{params.id}</b></h2>;
    }

    return <h2>Not valid at this point...</h2>;
}