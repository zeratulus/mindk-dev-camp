import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import UserContext from '../../context/user';
import { Context } from "../../context/context";

const pages = [];

export const AppHeader = () => {
    const user = useContext(UserContext);
    const [context, setContext] = useContext(Context);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [visibleComponent, setVisibleComponent] = React.useState(context);

    const handleComponent = (componentName) => {
        setVisibleComponent(componentName);
        setContext(componentName);
        console.log('Context: ' + context);
        console.log('State: ' + visibleComponent);
    };

    const feedClick = (event) => {
        handleComponent('feed');
    };

    const profileClick = (event) => {
        handleComponent('profile');
    };

    const addPostClick = (event) => {
        handleComponent('add_post');
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        event.stopPropagation();
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        event.stopPropagation();
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Socialize
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={addPostClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Add Post</Button>

                        <Button
                            onClick={profileClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Profile</Button>

                        <Button
                            onClick={feedClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Feed</Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={`Hello ${user.firstName}`}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar>{user.firstName.substr(0,1)}</Avatar>
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/*<MenuItem onClick={handleComponent('add_post')}>*/}
                            {/*    <Typography textAlign="center">Add Post</Typography>*/}
                            {/*</MenuItem>*/}

                            {/*<MenuItem onClick={handleComponent('feed')}>*/}
                            {/*    <Typography textAlign="center">Feed</Typography>*/}
                            {/*</MenuItem>*/}

                            {/*<MenuItem onClick={handleComponent('profile')}>*/}
                            {/*    <Typography textAlign="center">Profile</Typography>*/}
                            {/*</MenuItem>*/}

                            {/*<MenuItem>*/}
                            {/*    <Typography textAlign="center">Logout</Typography>*/}
                            {/*</MenuItem>*/}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};