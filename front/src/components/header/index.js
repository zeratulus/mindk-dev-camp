import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {HeaderMenu} from '../headerMenu'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

export function AppHeader({user, isLogged}) {
    const avatar = user.data.firstName.substr(0,1);
    const username = `Hello ${user.data.firstName + ' ' + user.data.lastName}`;

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to={'/'}>Socialize</Link>
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to={'/'}>Socialize</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <HeaderMenu isLogged={isLogged} />
                    </Box>

                    {isLogged &&
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={username}>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar>{avatar}</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};