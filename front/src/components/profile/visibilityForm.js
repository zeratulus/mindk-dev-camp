import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from "react";
import AxiosService from "../../services/AxiosService";
import {getVisibilityList} from "../../utils";
import {useUser} from "../../hooks/user";

export default function ProfileVisibilityForm({userVisibilities}) {

    const [user, setUser] = useUser();
    const [visibilityList, setVisibilityList] = React.useState(getVisibilityList);
    const [email] = React.useState();
    const [phone] = React.useState();
    const [university] = React.useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            userId: user.data.id,
            email,
            phone,
            university,
        }
        AxiosService.post('/user/:id/profile_visibility', data); //TODO:///
    };



    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>



            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >Save</Button>
        </Box>
    );
}