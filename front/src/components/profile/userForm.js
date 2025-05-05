import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from "react";
import AxiosService from "../../services/AxiosService";
import CropperWrapper from "../user/cropperWrapper";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import FormikAutocomplete from "../controls/formikAutocomplete";
import {useState} from "react";
import {useQuery} from "react-query";

export default function ProfileUserForm({user}) {
    const [universities, setUniversities] = useState([{id: '', title: '--- Select ---'}]);

    const fetchUniversities = async () => {
        const response = await AxiosService.get(`/university`);

        let options = [];

        for (let i = 0; i < response.data.length; i++) {
            let item = response.data[i];
            console.log(item)
            if (item) {
                options.push({id: item.id, title: item.title});
            }
        }
        setUniversities(options);

        return response.data;
    };

    const universityQuery = useQuery('universities', fetchUniversities);

    const handleSubmit = (data) => {
        AxiosService.post(`/user/${user.data.id}/profile`, data);
    };

    const fillUniversitiesOptions = () => {
        let options = [];

        for (let i = 0; i < universityQuery.data.length; i++) {
            let item = options[i];
            if (item)
                options.push({value: item.id, label: item.title});
        }
        setUniversities(options);
    }

    const validation = Yup.object({
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
    });

    // if (universityQuery.isSuccess) {
    //     fillUniversitiesOptions();
    // }

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

                        <Field
                            component={FormikAutocomplete}
                            id="university"
                            name="universityId"
                            label="University"
                            options={universities}
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