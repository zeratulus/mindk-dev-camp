import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from "react";
import AxiosService from "../../services/AxiosService";
import CropperWrapper from "../user/cropperWrapper";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";

export default function ProfileUserForm({user}) {

    const handleSubmit = (data) => {
        AxiosService.post(`/user/${user.data.id}/profile`, data);
    };

    const validation = Yup.object({
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
    });

    return (
        <div>

            <CropperWrapper/>

            <Formik
                initialValues={user.data}
                onSubmit={handleSubmit}
                validationSchema={validation}
            >
                {({errors}) => (
                    <Form>
                        <div>Errors: {JSON.stringify(errors)}</div>

                        <Field
                            component={TextField}
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            sx={{mb: '10px'}}
                        />

                        <Field
                            component={TextField}
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            sx={{mb: '10px'}}
                        />

                        <Field
                            component={TextField}
                            required
                            id="email"
                            name="email"
                            label="Email address"
                            fullWidth
                            sx={{mb: '10px'}}
                        />

                        <Field
                            component={TextField}
                            required
                            id="phone"
                            name="phone"
                            label="Phone number"
                            sx={{mb: '10px'}}
                            fullWidth
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >Save</Button>

                    </Form>
                )}
            </Formik>

        </div>
    );
}