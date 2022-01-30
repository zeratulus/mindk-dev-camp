import Button from '@mui/material/Button';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from "react";
import {TinyMCE} from "../tinyMCE";
import { Formik, Form, Field } from 'formik';
import {getUserFromStorage, getVisibilityList} from "../../utils";
import MenuItem from '@mui/material/MenuItem';
import { Select } from 'formik-mui';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AxiosService from "../../services/AxiosService";
import {useNavigate} from "react-router-dom";

export function Post({editorRef, post, userId}) {
    const navigation = useNavigate();
    const visibilities = getVisibilityList();
    const visibilityOptions = visibilities.map(({id, title}) => {
        return <MenuItem key={id} value={id}>{title}</MenuItem>;
    });

    const validation = Yup.object({
        visibilityId: Yup.string().uuid()
    });

    const submitHandler = (data) => {
        if (editorRef.current) {
            let post = data;
            post.body = editorRef.current.getContent();
            if (post.body.length === 0) {
                return;
            }
            post.userId = userId;
            //if add
            AxiosService.post(`/post/${post.id}`, post).then((res) => {
                editorRef.current.setContent('');
                navigation('/feed');
            }).catch(error => {
                console.log(error);
            });
            //if edit put
        }
    }

    return (
        <Container component="main">
            <Formik
                initialValues={post}
                onSubmit={submitHandler}
                validationSchema={validation}
            >
                <Form>
                    <Container sx={{display: 'flex', justifyContent: 'space-between', mt: '10px'}}>
                        <Typography component="h1" variant="h5" sx={{marginTop: '10px'}}>
                            <AddCommentIcon/> Add Post
                        </Typography>

                        <Field
                            className={'fw'}
                            variant="standard"
                            name="visibilityId"
                            component={Select}
                            sx={{width: '100%'}}
                            id="visibility"
                            labelId="visibility"
                            label="Visibility"
                        >
                            {visibilityOptions}
                        </Field>
                    </Container>

                    <TinyMCE
                        editorRef={editorRef}
                        value={post.body}
                    />

                    <Button
                        type={'submit'}
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >Publish</Button>
                </Form>
            </Formik>
        </Container>
    );
}