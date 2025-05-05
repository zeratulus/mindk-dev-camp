import MenuItem from "@mui/material/MenuItem";
import React, {useState} from "react";
import {getVisibilityList, PV_PUBLIC} from "../../utils";
import {FormControl, InputLabel, Select} from "@mui/material";
import {Field} from 'formik';

export function VisibilitySelect({formik, name, title, visibilityIdDefault = PV_PUBLIC.id}) {

    // let values = formik.values;
    // let currVal = values[name];
    // console.log(currVal);
    // let currentValue = formik.values.get(name);
    // let error = formik.touched[name] && Boolean(formik.errors[name]);
    // helperText={formik.touched[name] && formik.errors[name]}

    const [visibilityList, setVisibilityList] = useState(getVisibilityList);
    const [visibility, setVisibility] = useState(visibilityIdDefault);

    const visibilitiesOptions = visibilityList.map(({id, title}) => {
        return (<MenuItem key={id} value={id}>{title}</MenuItem>)
    });

    const onSelectChange = (e) => {
        // formik.handleChange
    }

    return (
        <Field component={FormControl} fullWidth sx={{mb: '10px', mt: '10px'}}>
            <InputLabel id={`label-visibility-${title}`}>{title}</InputLabel>
            <Select //Field
                label={title}
                labelId={`label-visibility-${title}`}
                id="visibility-select-${title}"
                name={name}
                // value={formik.values.get(name)}
                // error={formik.touched[name] && Boolean(formik.errors[name])}
                // helperText={formik.touched[name] && formik.errors[name]}
                // onChange={onSelectChange}
            >
                {visibilitiesOptions}
            </Select>
        </Field>
    );
}