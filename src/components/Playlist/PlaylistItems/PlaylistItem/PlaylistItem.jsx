import React from 'react';
import { Link } from "react-router-dom";
import StyledPlaylistItem from './PlaylistItem.styled';

const PlaylistItem = ({video}) => {
    return (
        <StyledPlaylistItem>
            <Link to={{pathname: `/${video.id}`, autoplay: true}}>{video.title}</Link>
        </StyledPlaylistItem>
    )
}

export default PlaylistItem;
