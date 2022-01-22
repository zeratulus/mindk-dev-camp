import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {getUserFromStorage} from "../../utils";

function UserPost({post}) {

    const user = getUserFromStorage();

    const postActions = (
        <React.Fragment>
            <IconButton aria-label="settings">
                <MoreVertIcon/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <Card sx={{ marginBottom: '10px' }}>
            <CardHeader
                avatar={
                    <Link to={'/user/' + post.userId}>
                        <Avatar aria-label="recipe">
                            {post.user.firstName.substr(0,1)}
                        </Avatar>
                    </Link>
                }
                action={(post.userId === user.data.id) && postActions}
                title={<Link to={'/user/' + post.userId}>{post.user.firstName + ' ' + post.user.lastName}</Link>}
                subheader={(new Date(post.createdAt)).toLocaleString()}
                className={'user-post-header'}
            />
            <CardContent className={'user-post-content'}>
                {ReactHtmlParser(post.body)}
            </CardContent>
            <CardActions disableSpacing className={'user-post-actions'}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
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