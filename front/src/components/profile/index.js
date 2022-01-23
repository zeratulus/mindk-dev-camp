import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useUser} from "../../hooks/user";
import AxiosService from "../../services/AxiosService";
import Card from "@mui/material/Card";

function Profile() {

    const [user, setUser] = useUser();

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();

    const [visibilityProps, setVisibilityProps] = React.useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            firstName,
            lastName
        }
        AxiosService.post('/user/:id/profile', data);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Card
                sx={{
                    mt: 10,
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
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
            </Card>
        </Container>
    );
}

export {
    Profile
};