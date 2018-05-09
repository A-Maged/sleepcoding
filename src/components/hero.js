import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <video autoPlay muted loop className="bg-media" id="myVideo">
                <source src="assets/imgs/video.mp4" type="video/mp4"/>
                <source src="assets/imgs/video.webm" type="video/webm"/>
            </video>
            <div className="overlay-absolute">
                <div className="content" >
                    {/*<h1 className="slogan">Hi, im a web designer and developer. </h1>*/}
                    <h1 className="slogan">Hi, im a front-end developer <br/> with a back-end experience</h1>
                    <a className="btn" href="https://www.upwork.com/freelancers/~01d98adf66b01f0e59" target="_blank">hire me</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
