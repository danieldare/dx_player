import React from 'react';
import PlaylistItems from './PlaylistItems/PlaylistItems';
import NightMode from './NightMode/NightMode';
import PlaylistHeader from './PlaylistHeader/PlaylistHeader';
import StyledPlaylist from './Playlist.style';

const Playlist = ({videos}) => {
    return (
        <StyledPlaylist>
            <NightMode />
            <PlaylistHeader />
            <PlaylistItems videos={videos} />
        </StyledPlaylist>
    )
}

export default Playlist;
