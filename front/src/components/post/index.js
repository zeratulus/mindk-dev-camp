import Button from '@mui/material/Button';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from "react";
import {TinyMCE} from "../tinyMCE";
import {Formik, Form, Field} from 'formik';
import {getVisibilityList} from "../../utils";
import MenuItem from '@mui/material/MenuItem';
import {Select} from 'formik-mui';
import * as Yup from 'yup';
import AxiosService from "../../services/AxiosService";
import {useNavigate} from "react-router-dom";

export function Post({editorRef, post, userId, isAdd}) {
    const navigation = useNavigate();
    const visibilities = getVisibilityList();
    const visibilityOptions = visibilities.map(({id, title}) => {
        return <MenuItem key={id} value={id}>{title}</MenuItem>;
    });

    const validation = Yup.object({
        visibilityId: Yup.string().uuid(),
        body: Yup.string().required()
    });

    const processSuccess = () => {
        editorRef.current.setContent('');
        navigation('/feed');
    }

    const submitHandler = (data) => {
        if (editorRef.current) {
            let post = data;
            post.userId = userId;
            if (isAdd) {
                AxiosService.post(`/post`, post).then((res) => {
                    processSuccess();
                }).catch(error => {
                    console.log(error);
                });
            } else {
                AxiosService.put(`/post/${post.id}`, post).then((res) => {
                    processSuccess();
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }

    return (
        <Container component="main">
            <Formik
                initialValues={post}
                onSubmit={submitHandler}
                validationSchema={validation}
            >
                {({errors}) => (
                    <Form>
                        <Container sx={{display: 'flex', justifyContent: 'space-between', mt: '10px'}}>
                            <Typography component="h1" variant="h5" sx={{marginTop: '10px'}}>
                                <AddCommentIcon/> Add Post
                            </Typography>
                            <div>Errors: {JSON.stringify(errors)}</div>
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
                            name={'body'}
                        />

                        <Button
                            type={'submit'}
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >Publish</Button>
                    </Form>)
                }
            </Formik>
        </Container>
    );
}