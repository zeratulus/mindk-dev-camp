import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from "react";
import AxiosService from "../../services/AxiosService";
import {getVisibilityList} from "../../utils";
import {useUser} from "../../hooks/user";
import {Formik, Form, Field} from 'formik';
import {Select} from 'formik-mui';
import * as Yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";

export default function ProfileVisibilityForm({userVisibilities}) {

    const [user, setUser] = useUser();
    const visibilities = getVisibilityList();
    const visibilityOptions = visibilities.map(({id, title}) => {
        return <MenuItem key={id} value={id}>{title}</MenuItem>;
    });

    const validation = Yup.object({
        email: Yup.string().uuid(),
        phone: Yup.string().uuid(),
        university: Yup.string().uuid(),
    });

    const submitHandler = (data) => {
        AxiosService.post('/user/:id/profile_visibility', data);
    };

    return (
        <>

            <Formik
                initialValues={userVisibilities}
                onSubmit={submitHandler}
                validationSchema={validation}
            >
                <Form>
                    <Box sx={{display: 'flex', my: '10px'}}>
                        <Field
                            className={'fw'}
                            variant="standard"
                            name="email"
                            component={Select}
                            sx={{width: '100%'}}
                            id="email"
                            labelId="email-visibility"
                            label="E-mail visibility"
                        >
                            {visibilityOptions}
                        </Field>
                    </Box>

                    <Box sx={{display: 'flex', my: '10px'}}>
                        <Field
                            className={'fw'}
                            variant="standard"
                            name="phone"
                            component={Select}
                            fullWidth
                            sx={{width: '100%'}}
                            id="phone"
                            labelId="phone-visibility"
                            label="Phone visibility"
                        >
                            {visibilityOptions}
                        </Field>
                    </Box>

                    <Box sx={{display: 'flex', my: '10px'}}>
                        <Field
                            className={'fw'}
                            variant="standard"
                            name="university"
                            component={Select}
                            sx={{width: '100%'}}
                            id="university"
                            labelId="university-visibility"
                            label="University visibility"
                        >
                            {visibilityOptions}
                        </Field>
                    </Box>
                </Form>
            </Formik>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >Save</Button>
        </>
    );
}