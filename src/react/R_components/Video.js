import React from 'react';

const Video = props => {
    return (
        <div>
            <h3 className="tertiary-title">{props.videoTitle}</h3>
            {/* <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={props.src} data-youtubeid="G4doTGQPRPw" data-translatedyoutubeid="G4doTGQPRPw" tabindex="0" allow="autoplay"></iframe>
            </div> */}
        </div>
    );
}

export default Video;