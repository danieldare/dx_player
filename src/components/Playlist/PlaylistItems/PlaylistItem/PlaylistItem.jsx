import React from 'react';
import { Link } from "react-router-dom";
import StyledPlaylistItem from './PlaylistItem.style';

const PlaylistItem = ({video, activeVideo}) => {
    return (
        <StyledPlaylistItem active={activeVideo}>
            <Link to={{pathname: `/${video.id}`, autoplay: true}} className="flex">
                <div className="player_video_num">{video.num}</div>
                <div className="player_video_name">{video.title}</div>
                <div className="player_video_duration ">{video.duration}</div>
            </Link>
        </StyledPlaylistItem>
    )
}

export default PlaylistItem;
