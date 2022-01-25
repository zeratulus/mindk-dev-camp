import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Editor } from '@tinymce/tinymce-react';
import React, {useState} from "react";
import {useUser} from "../../hooks/user";
import AxiosService from "../../services/AxiosService";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import {FormControl, InputLabel, Select} from "@mui/material";
import {Preloader} from "../preloader";
import {getVisibilityList, PV_PUBLIC} from "../../utils";
import MenuItem from "@mui/material/MenuItem";

export function AddPost() {
    const [user, setUser] = useUser();
    const [visibilityList, setVisibilityList] = useState(getVisibilityList);
    const [visibility, setVisibility] = useState(PV_PUBLIC.id);

    const editorRef = React.useRef(null);
    //TODO: Alert component
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [alertSeverity, setAlertSeverity] = React.useState('success');
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertVisible(false);
    };
    const alertAction = (
        <React.Fragment>
            <Link to={'/feed'}>
                <Button color="primary" size="small">Go To Feed</Button>
            </Link>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleAlertClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    //TODO: ./ Alert component

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editorRef.current) {
            let data = {
                userId: user.data.id,
                visibilityId: visibility,
                body: editorRef.current.getContent()
            }
            AxiosService.post('/post', data).then((res) => {
                editorRef.current.setContent('');
                setAlertSeverity('success');
                setAlertMessage('Success: Your post was published!');
                setAlertVisible(true);
            }).catch(error => {
                setAlertSeverity('error');
                setAlertMessage('Error: ' + error.message);
                setAlertVisible(true);
                console.log()
            });
        }
    };

    const visiblitiesOptions = visibilityList.map(({id, title}) => {
        return (<MenuItem key={id} value={id}>{title}</MenuItem>)
    })

    return (
        <Container component="main">
            <CssBaseline />

            <Typography component="h1" variant="h5" sx={{ marginTop: '10px' }}>
                <AddCommentIcon /> Add Post
            </Typography>

            <FormControl fullWidth sx={{ mb: '10px', mt: '10px'}}>
                <InputLabel id="visibility">Visibility</InputLabel>
                <Select
                    labelId="visibility"
                    id="visibility-select"
                    value={visibility}
                    label="Visibility"
                    onChange={e => setVisibility(e.target.value)}
                >
                    {visiblitiesOptions}
                </Select>
            </FormControl>

            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link charmap print preview anchor paste',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount emoticons image imagetools'
                    ],
                    toolbar: 'undo redo | paste | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | image | emoticons | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    skin: (window.matchMedia("(prefers-color-scheme: dark)").matches ? "oxide-dark" : ""),
                    content_css: (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : ""),
                    paste_data_images: true
                }}
            />

            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
            >Publish</Button>

            {/*TODO: Alert component*/}
            <Snackbar open={alertVisible} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ width: '100%' }} action={alertSeverity === 'success' ? alertAction : ''}>
                    {alertMessage}
                </Alert>
            </Snackbar>

        </Container>
    );
}