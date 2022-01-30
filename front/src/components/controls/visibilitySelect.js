import MenuItem from "@mui/material/MenuItem";
import React, {useState} from "react";
import {getVisibilityList, PV_PUBLIC} from "../../utils";
import {FormControl, InputLabel, Select} from "@mui/material";

export function VisibilitySelect({name, title, visibilityIdDefault = PV_PUBLIC.id}) {

    const [visibilityList, setVisibilityList] = useState(getVisibilityList);
    const [visibility, setVisibility] = useState(visibilityIdDefault);

    const visiblitiesOptions = visibilityList.map(({id, title}) => {
        return (<MenuItem key={id} value={id}>{title}</MenuItem>)
    });

    return (
        <FormControl fullWidth sx={{ mb: '10px', mt: '10px'}}>
            <InputLabel id={`visibility-${title}`}>{title}</InputLabel>
            <Select
                labelId={`visibility-${title}`}
                id="visibility-select"
                value={visibility}
                label={title}
                name={name}
                onChange={e => setVisibility(e.target.value)}
            >
                {visiblitiesOptions}
            </Select>
        </FormControl>
    );
}