import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import UserPostMenu from './userPostMenu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {getUserFromStorage} from "../../utils";
import {ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

function UserPost({post}) {

    const currentUser = getUserFromStorage();
    const avatarString = post.user.firstName.substr(0, 1);
    const fullName = post.user.firstName + ' ' + post.user.lastName;

    const likesCount = post.postLikes.length;
    const commentsCount = post.postCommentaries.length;
    const isComments = commentsCount > 0;

    const comments = post.postCommentaries.map((comment) => {
        if (comment === undefined) {
            return (<></>);
        } else {
            const avatarStr = comment.user.firstName.substr(0, 1);
            const fullName = comment.user.firstName + ' ' + comment.user.lastName;

            return (
                <ListItem alignItems="flex-start" key={comment.id}>
                    <ListItemAvatar>
                        <Avatar>{avatarStr}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={fullName}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >{comment.body}</Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            );
        }
    });

    return (
        <Card sx={{marginBottom: '10px'}}>
            <CardHeader
                avatar={
                    <Link to={'/user/' + post.userId}>
                        <Avatar aria-label="recipe">
                            {avatarString}
                        </Avatar>
                    </Link>
                }
                action={(post.userId === currentUser.data.id) && <UserPostMenu postId={post.id}/>}
                title={<Link to={'/user/' + post.userId}>{fullName}</Link>}
                subheader={(new Date(post.createdAt)).toLocaleString()}
                className={'user-post-header'}
            />
            <CardContent className={'user-post-content'}>
                {ReactHtmlParser(post.body)}
                {isComments &&
                    <div>
                        <div>
                            <small style={{my: 0}}>Commentaries ({commentsCount}):</small>
                        </div>
                        <List sx={{width: '100%', transform: 'scale(0.8)'}}>
                            {comments}
                        </List>
                    </div>
                }

            </CardContent>
            <CardActions disableSpacing className={'user-post-actions'}>
                <IconButton aria-label="add to favorites" style={{position: 'relative'}}>
                    <FavoriteIcon/>
                    <small style={{fontSize: '10px', position: 'absolute', color: '#000'}}>{likesCount}</small>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

UserPost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        user: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        })
    }),
}

export {
    UserPost
};