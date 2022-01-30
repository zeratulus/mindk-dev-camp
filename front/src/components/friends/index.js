import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {ListItemAvatar} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {Link} from "react-router-dom";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

function Friends({friends}) {

    const friendsList = friends.map((friend) =>
        <Link to={`/user/${friend.id}`} key={friend.id}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>{friend.firstName.substr(0,1)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={friend.firstName + ' ' + friend.lastName}
                        secondary={
                            <React.Fragment>
                                <small>{friend.email}</small>
                            </React.Fragment>
                        }
                    />
                </ListItemButton>
            </ListItem>
        </Link>
    );

    return (
        <Container component="main">
            <CssBaseline />
            <Typography component="h1" variant="h5" sx={{ marginTop: '10px', marginBottom: '10px' }}>
                <SupervisedUserCircleIcon/> Friends
            </Typography>
            <Card>
                <List sx={{ width: '100%' }} aria-label="friends">
                    {friendsList}
                </List>
            </Card>
        </Container>
    );
}

export {
    Friends
};