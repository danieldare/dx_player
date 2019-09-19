import React from 'react';
import ReactPlayer from "react-player";
import StyledVideo from './Video.style';

const Video = ({activeVideo, onEndedCallBack, onProgressCallBack}) => {
    return (
        <StyledVideo>
            <ReactPlayer  
                controls={true} 
                height="100%" 
                width="100%"
                style={{ position : "absolute", top: "0"}} 
                url={activeVideo.video}
                onEnded={onEndedCallBack}
                onProgress={onProgressCallBack}
                />
        </StyledVideo>
    )
}

export default Video;
