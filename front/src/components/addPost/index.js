import Button from '@mui/material/Button';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from "react";
import {AlertComponent} from "../alert";
import {TinyMCE} from "../tinyMCE";
import {VisibilitySelect} from "../controls/visibilitySelect";

export function AddPost({submitHandler, editorRef, alertMessage, alertSeverity, isToFeedAction, setAlertVisible}) {

    return (
        <Container component="main">

            <Typography component="h1" variant="h5" sx={{marginTop: '10px'}}>
                <AddCommentIcon/> Add Post
            </Typography>

            <VisibilitySelect
                name="visibility"
                title="Visibility"
            />

            <TinyMCE editorRef={editorRef}/>

            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
                onClick={submitHandler}
            >
                Publish
            </Button>

            <AlertComponent
                message={alertMessage}
                severity={alertSeverity}
                setVisibility={setAlertVisible}
                isFeedAction={isToFeedAction}
            />
        </Container>
    );
}