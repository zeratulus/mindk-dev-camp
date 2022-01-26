import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import {Menu} from "@mui/material";

export default function UserPostMenu({postId}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <MoreVertIcon/>
            </IconButton>

            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Link to={`/post/${postId}/edit`}>
                    <MenuItem>Edit</MenuItem>
                </Link>
                <MenuItem>Delete</MenuItem>
            </Menu>
        </React.Fragment>
    )
}