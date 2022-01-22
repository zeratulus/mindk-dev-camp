import React from 'react';
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
import { Link } from "react-router-dom";
import {useUser} from "../../hooks/user";
import {getUserFromStorage} from "../../utils";

export const AppHeader = () => {
    //TODO: Fix bug with not re-render on login =[

    const [pages, setPages] = React.useState([]);
    const [user, setUser] = useUser();
    const [isLogged, setIsLogged] = React.useState(user.isLogged);

    function storageEventHandler(e) {
        console.log('Storage handler fires >>>');
        let user = getUserFromStorage();
        console.log(user);
        setUser(user);
        setIsLogged(user.isLogged);
    }

    React.useEffect(() => {
        console.log(">>> useEffect >>> window.addEventListener('storage', storageEventHandler);")
        window.addEventListener('storage', storageEventHandler);

    }, []);

    let avatar = user.data.firstName.substr(0,1);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                        <Link to={'/'}>Socialize</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {!isLogged &&
                        <Link to={"/signin"}>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>Sign In</Button>
                        </Link>
                        }

                        {!isLogged &&
                        <Link to={"/signup"}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>Sign Up</Button>
                        </Link>
                        }

                        {isLogged &&
                        <Link to={"/feed"}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>Feed</Button>
                        </Link>
                        }
                        {isLogged &&
                        <Link to={"/friends"}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>Friends</Button>
                        </Link>
                        }
                        {isLogged &&
                        <Link to={"/addPost"}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>Add Post</Button>
                        </Link>
                        }
                        {isLogged &&
                        <Link to={"/profile"}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>Profile</Button>
                        </Link>
                        }
                        {isLogged &&
                        <Link to={"/logout"}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>Log out</Button>
                        </Link>
                        }
                    </Box>

                    {isLogged &&
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={`Hello ${user.data.firstName + ' ' + user.data.lastName}`}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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