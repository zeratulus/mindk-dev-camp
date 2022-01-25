import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from "react";
import AxiosService from "../../services/AxiosService";

export default function ProfileUserForm({user}) {

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            firstName,
            lastName
        }
        AxiosService.post('/user/:id/profile', data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                margin="normal"
                onChange={e => setFirstName(e.target.value)}
                value={user.data.firstName}
            />

            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                margin="normal"
                onChange={e => setLastName(e.target.value)}
                value={user.data.lastName}
            />

            <TextField
                required
                id="email"
                name="email"
                label="Email address"
                fullWidth
                autoComplete="email"
                margin="normal"
                value={user.data.email}
                readonly
            />

            <TextField
                required
                id="phone"
                name="phone"
                label="Phone number"
                fullWidth
                autoComplete="phone"
                margin="normal"
                value={user.data.phone}
                readonly
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >Save</Button>

        </Box>
    );
}