import React,  { useState , useEffect } from 'react'
import { StyledDxPlayer } from './DxPlayer.style';
import Video from '../Video/Video';
import Playlist from '../Playlist/Playlist';
import { videosList } from '../../videoList';

const DxPLayer = ({ history }) => {
    const [ state, setState ] = useState({
        videos: videosList.playlist,
        autoplay: false,
        activeVideo: videosList.playlist[0],
        nightMode: true
    });

    useEffect(() => {
        const id = history.location.pathname.split("/")[1];
        if(id !== undefined){
            const newVideoIndex = state.videos.findIndex(video => video.id === id);
            setState({
                    ...state,
                    activeVideo: state.videos[newVideoIndex]
                })
        }else{
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false,
            });
        }
    }, [ history, state.videos, state.activeVideo.id, state]);

    const onEndCallBack = () =>  {
        const videoId = history.location.pathname.split("/")[1];
        let currentVideoIndex = state.videos.findIndex(video => video.id === videoId);

        let nextVideoIndex = (currentVideoIndex === state.videos.length - 1) ? 0 : currentVideoIndex + 1;
        history.push({
            pathname: `${state.videos[nextVideoIndex].id}`,
            autoplay: true
        })
    }

    const onProgressCallBack = (e) => {
        if(e.playedSeconds > 5 && e.playedSeconds < 6){
            const videos = [...state.videos];
            const currentplayedVideo = videos.find(video => video.id === state.activeVideo.id);
            currentplayedVideo.played = true;
            setState(prevstate => ({
                ...prevstate,
                videos
            }))
        }
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
                activeVideo={state.activeVideo}
            />
        </StyledDxPlayer>
    )
}

export default DxPLayer;
