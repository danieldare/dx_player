import React,  { useState , useEffect } from 'react'
import { StyledDxPlayer } from './DxPlayer.style';
import Video from '../Video/Video';
import Playlist from '../Playlist/Playlist';
import { videosList } from '../../videoList';

const DxPLayer = ({ match, history }) => {
    const [ state, setState ] = useState({
        videos: videosList.playlist,
        autoplay: false,
        activeVideo: videosList.playlist[0],
        nightMode: true
    });

    useEffect(() => {
        const videoId = match.params.activeVideo;
        if(videoId !== undefined){
            const newVideoIndex = state.videos.findIndex(video => video.id === videoId);
            setState(prevState => ({
                ...prevState,
                activeVideo: prevState.videos[newVideoIndex],
            }))
        }else{
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false
            });
        }
    }, [ history, state.activeVideo.id , match.params.activeVideo , state.videos ])

    const onEndCallBack = () =>  {
        
    }

    const onProgressCallBack = () => {
        
    }

    const nightMode = () => {

    }

    return (
        <StyledDxPlayer>
            <Video 
                activeVideo={state.activeVideo}
                autoplay={state.autoplay}
                onEndedCallBack={onEndCallBack} 
                onProgressCallBack={onProgressCallBack} 
            />
            <Playlist 
                nightMode={nightMode} 
                videos={state.videos} 
            />
        </StyledDxPlayer>
    )
}

export default DxPLayer
