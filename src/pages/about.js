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
                    this is the about me page
                </section>

                <Footer />
            </div>
        );
    }
}

export default About;
