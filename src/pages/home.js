import React from 'react'

/* components */
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Logo />

            <section className="container">
                <h2>this the home page</h2>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
