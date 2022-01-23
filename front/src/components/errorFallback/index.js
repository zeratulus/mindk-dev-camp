import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ErrorFallback({ message }) {

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h1">
                    💩 Oops 💩
                </Typography>
                <Typography component="h4" variant="h4">
                    Something went wrong...
                </Typography>
                <Typography component="p" variant="h5">
                    {message}
                </Typography>
                <Link to={'/'}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >Go Home</Button>
                </Link>
           </Box>
        </Container>
    );
}

export {
    ErrorFallback
};