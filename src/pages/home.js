import React, {Component} from 'react'

/* components */
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';

class Home extends Component{
    render(){
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
                            <div className="name">- MAGED</div>
                        </div>
                    </div>
                </section>

                <section className="services-section ">
                    <div className="container">
                        <div className="section-title-wrapper">
                            <h2 className="title">services</h2>
                        </div>

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
                    </div>
                </section>

                <section className="section-portfolio">
                    <div className="container">

                        <div className="section-title-wrapper">
                            <h2 className="title">portfolio</h2>
                        </div>

                        <div className="card ">
                            <div className="image">
                                <img src="assets/imgs/000cm.png" alt=""/>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="title">react app</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="icons">
                                                <a className="open-external-icon" href="" target="_blank">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <i className="lightbox-icon fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag tag-sass">sass</div>
                                    <div className="tag tag-js">js</div>
                                    <div className="tag tag-react">react</div>
                                    <div className="tag tag-react">react</div>
                                    <div className="tag tag-react">react</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                </div>
                            </div>
                        </div>

                        <div className="card ">
                            <div className="image">
                                <img src="assets/imgs/braun.png" alt=""/>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="title">python script</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="icons">
                                                <a className="open-external-icon" href="" target="_blank">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <i className="lightbox-icon fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag tag-sass">sass</div>
                                    <div className="tag tag-js">js</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                    <div className="tag tag-react">react</div>
                                </div>
                            </div>
                        </div>

                        <div className="card ">
                            <div className="image">
                                <img src="assets/imgs/braun.png" alt=""/>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="title">ui / ux</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="icons">
                                                <a className="open-external-icon" href="" target="_blank">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <i className="lightbox-icon fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag tag-sass">sass</div>
                                    <div className="tag tag-js">js</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                    <div className="tag tag-react">react</div>
                                </div>
                            </div>
                        </div>

                        <div className="card ">
                            <div className="image">
                                <img src="assets/imgs/braun.png" alt=""/>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="title">ui / ux</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="icons">
                                                <a className="open-external-icon" href="" target="_blank">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <i className="lightbox-icon fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag tag-sass">sass</div>
                                    <div className="tag tag-js">js</div>
                                    <div className="tag tag-react">react</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                </div>
                            </div>
                        </div>

                        <div className="card ">
                            <div className="image">
                                <img src="assets/imgs/braun.png" alt=""/>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="title">ui / ux</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="icons">
                                                <a className="open-external-icon" href="" target="_blank">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <i className="lightbox-icon fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag tag-sass">sass</div>
                                    <div className="tag tag-js">js</div>
                                    <div className="tag tag-react">react</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                </div>
                            </div>
                        </div>

                        <div className="card ">
                            <div className="image">
                                <img src="assets/imgs/braun.png" alt=""/>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="title">ui / ux</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="icons">
                                                <a className="open-external-icon" href="" target="_blank">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <i className="lightbox-icon fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag tag-sass">sass</div>
                                    <div className="tag tag-js">js</div>
                                    <div className="tag tag-react">react</div>
                                    <div className="tag tag-wordpress">wordpress</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section-hire-me">
                    <div className="overlay">
                        <div className="section-title-wrapper">
                            <h2 className="title">let's work together</h2>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odit quisquam sapiente dicta ipsam dolores ducimus eaque voluptatibus provident velit cupiditate omnis deleniti, tempora commodi, hic sequi, a necessitatibus assumenda.</p>
                        <a className="btn" href="https://www.upwork.com/freelancers/~01d98adf66b01f0e59" target="_blank">hire me</a>
                    </div>
                </section>


                <Footer />
            </div>
        );

    }
}

export default Home;
