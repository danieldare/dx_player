import React from 'react';
import PlaylistItems from './PlaylistItems/PlaylistItems';
import PlaylistHeader from './PlaylistHeader/PlaylistHeader';
import StyledPlaylist from './Playlist.style';

const Playlist = ({videos, activeVideo}) => {
    return (
        <StyledPlaylist>
            <PlaylistHeader videos={videos} activeVideo={activeVideo}  />
            <PlaylistItems videos={videos} activeVideo={activeVideo} />
        </StyledPlaylist>
    )
}

export default Playlist;
