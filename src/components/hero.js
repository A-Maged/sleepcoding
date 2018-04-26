import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <video autoPlay muted loop className="bg-media" id="myVideo">
                <source src="assets/imgs/video.mp4" type="video/mp4"/>
                <source src="assets/imgs/video.webm" type="video/webm"/>
            </video>
            <div className="overlay">
                <div className="content" >
                    <h1>Hi, im a web designer and developer. </h1>
                    <br/>
                    <div className="name">- MAGED</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
