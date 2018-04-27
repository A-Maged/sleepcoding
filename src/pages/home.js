import React from 'react'

/* components */
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';

const Home = () => {
    return (
        <div>
            <Header />

            <Hero />

            <section className="intro-section">
                <div className="container">
                    <div className="image">
                        <img src="assets/imgs/me.png" alt=""/>
                    </div>
                    <div className="text">
                        <h3>I have a thing for creating Modern, Clean and Interactive web apps.</h3>
                        <p>I will gladly use my skills to solve your problems in a reasonable time.</p>
                    </div>
                </div>
            </section>



            <section className="services-section ">
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-mobile"></i>
                        </div>
                        <h4 className="title">responsive design</h4>
                        <p className="describtion">
                            Responsive design has grown from a preference to a necessity. We employ state-of-the-art responsive design technology to ensure an optimal viewing experience on all devices.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fab fa-css3"></i>
                        </div>
                        <h4 className="title">single page applications</h4>
                        <p className="describtion">
                            Responsive design has grown ate-of-the-art responsive design technology to ensure an optimal viewing experience on all devices.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h4 className="title">wordpress</h4>
                        <p className="describtion">
                            Responsive design has grown from a preference to a necessity.  responsive design technology to ensure an optimal viewing experience on all devices.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fab fa-react"></i>
                        </div>
                        <h4 className="title">single page applications</h4>
                        <p className="describtion">
                            Responsive design has grown ate-of-the-art responsive design technology to ensure an optimal viewing experience on all devices.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fab fa-wordpress"></i>
                        </div>
                        <h4 className="title">wordpress</h4>
                        <p className="describtion">
                            Responsive design has grown from a preference to a necessity.  responsive design technology to ensure an optimal viewing experience on all devices.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h4 className="title">responsive design</h4>
                        <p className="describtion">
                            Responsive design has grown from a preference to a necessity. We employ state-of-the-art responsive design technology to ensure an optimal viewing experience on all devices.
                        </p>
                    </div>
            </section>


            <Footer />
        </div>
    );
}

export default Home;
