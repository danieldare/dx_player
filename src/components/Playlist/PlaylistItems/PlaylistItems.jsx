import React from 'react';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import StyledPlaylistItems from './PlaylistItems.style';

const PlaylistItems = ({videos, activeVideo}) => {
    return (
        <StyledPlaylistItems>
            {videos.map(video => <PlaylistItem 
                key={video.id}
                video={video} 
                activeVideo={ video.id === activeVideo.id ? true : false }
                />)}
        </StyledPlaylistItems>
    )
}

export default PlaylistItems;
