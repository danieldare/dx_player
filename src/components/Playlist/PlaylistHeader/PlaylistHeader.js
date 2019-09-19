import React from 'react'
import StyledPlaylistHeader from './PlaylistHeader.style';

const PlaylistHeader = ({activeVideo, videos}) => {
    return (
        <StyledPlaylistHeader>
            <div>
                Playlist Header 
            </div>
            <p>{activeVideo.num}/{videos.length}</p>
        </StyledPlaylistHeader>
    )
}

export default PlaylistHeader;
