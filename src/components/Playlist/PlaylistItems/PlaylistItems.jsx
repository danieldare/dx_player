import React from 'react';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import StyledPlaylistItems from './PlaylistItems.style';

const PlaylistItems = ({videos}) => {
    return (
        <StyledPlaylistItems>
            {videos.map(video => <PlaylistItem key={video.id} video={video} />)}
        </StyledPlaylistItems>
    )
}

export default PlaylistItems;
