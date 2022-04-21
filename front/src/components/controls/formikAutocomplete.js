import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {fieldToTextField} from 'formik-mui';
import {TextField} from "@mui/material";

const FormikAutocomplete = (props) => {
    const {form: {setTouched, setFieldValue}} = props;
    const {label, error, helperText, ...field} = fieldToTextField(props);
    const {name} = field;

    return (
        <Autocomplete
            {...props}
            {...field}
            getOptionLabel={option => option.title}
            onChange={(_, value) => setFieldValue(name, value)}
            onBlur={() => setTouched({[name]: true})}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={props =>
                <TextField {...props} helperText={helperText} error={error} label={label}/>
            }
        />
    );
}

export default FormikAutocomplete;