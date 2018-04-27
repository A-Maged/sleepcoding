import React from 'react';
import {Link} from 'react-router-dom';

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
                    <Link className="btn" to="#">hire me</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
