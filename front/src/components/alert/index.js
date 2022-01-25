import React from "react";
import MuiAlert from "@mui/material/Alert";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Container from "@mui/material/Container";

export function AlertComponent({message, visibility, setVisibility, severity = 'success', isFeedAction = false, action = null}) {

    const [isVisible, setVisible] = React.useState(visibility ?? false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setVisibility(false);
        setVisible(false);
    };

    const actionToFeed = (
        <React.Fragment>
            <Link to={'/feed'}>
                <Button color="primary" size="small">Go To Feed</Button>
            </Link>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleAlertClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar open={isVisible} autoHideDuration={6000} onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity={severity} sx={{ width: '100%' }} action={action ?? isFeedAction ? actionToFeed : ''}>
                {message}
            </Alert>
        </Snackbar>
    );
}