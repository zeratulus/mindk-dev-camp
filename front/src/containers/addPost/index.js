import {AddPost} from "../../components/addPost";
import {useUser} from "../../hooks/user";
import React from "react";
import AxiosService from "../../services/AxiosService";
import {PV_PUBLIC} from "../../utils";

export function AddPostContainer() {
    const [user, setUser] = useUser();

    const editorRef = React.useRef(null);

    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [alertSeverity, setAlertSeverity] = React.useState('success');
    const [isToFeedAction, setToFeedAction] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editorRef.current) {
            let data = {
                userId: user.data.id,
                visibilityId: PV_PUBLIC.id,
                // visibilityId: visibility,
                body: editorRef.current.getContent()
            }
            AxiosService.post('/post', data).then((res) => {
                editorRef.current.setContent('');
                setAlertSeverity('success');
                setAlertMessage('Success: Your post was published!');
                setToFeedAction(true);
                setAlertVisible(true);
            }).catch(error => {
                setAlertSeverity('error');
                setAlertMessage('Error: ' + error.message);
                setToFeedAction(false);
                setAlertVisible(true);
                console.log(error);
            });
            console.log(data);
        }
    };

    return <AddPost
        submitHandler={handleSubmit}
        editorRef={editorRef}
        alertVisible={alertVisible}
        alertMessage={alertMessage}
        alertSeverity={alertSeverity}
        isToFeedAction={isToFeedAction}
        setAlertVisible={setAlertVisible}
    />;
}