import React, { Component } from 'react'

/* components */
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Logo />

                <section className="about">
                    <div className="container">
                        this is the about me page
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default About;
