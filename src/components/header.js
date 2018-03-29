import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom"



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

                    <nav className={this.state.mobileMenu.displayClass} onClick={this.toggleMenu}>
                        <NavLink exact activeClassName="active" to="/">home</NavLink>
                        <NavLink activeClassName="active" to="/blog">blog</NavLink>
                        <NavLink activeClassName="active" to="/about">about</NavLink>
                        <NavLink activeClassName="active" to="/post/:id" onClick={e => e.preventDefault()} className="menu-link">Menu</NavLink>
                        <i className="toggle-menu-icon fas fa-angle-down"></i>
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
