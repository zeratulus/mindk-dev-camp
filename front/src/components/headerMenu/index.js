import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

function HeaderMenu({isLogged}) {
    return (
        <>
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
        </>
    );
}

export {
    HeaderMenu
}