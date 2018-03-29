import React, { Component } from 'react';
import { Link } from "react-router-dom"



class Header extends Component {
    constructor(){
        super()
        this.state= {
            'mobileMenu': {
                'displayClass': ''
            }
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(e) {
        e.preventDefault();
        let mobileMenu = {...this.state.mobileMenu}
        mobileMenu.displayClass = mobileMenu.displayClass === 'show-menu' ? '' : 'show-menu'
        this.setState({mobileMenu})
    }

    render() {
        return (
            <header>
                <div className="container clearfix">

                    <span className="toggle-menu" onClick={this.toggleMenu}>
                        <button className="toggle-menu-btn active">Menu</button>
                        <i className="toggle-menu-icon fas fa-angle-down"></i>
                    </span>

                    <nav className={this.state.mobileMenu.displayClass} >
                        <Link to="/">home</Link>
                        <Link to="/blog">blog</Link>
                        <Link to="/about">about</Link>
                    </nav>

                    <div className="social-media">
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-github"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
