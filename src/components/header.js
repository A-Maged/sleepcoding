import React from 'react'
import { NavLink, Link } from "react-router-dom"
import SearchForm from './search-form'

function onSearchFormSubmit(value){
    console.log(value)
}

const Header = () => {
    return (
        <header>
            <div className="container">

                <SearchForm onSubmit={onSearchFormSubmit} />

                <nav>
                    <NavLink exact activeClassName="active" to="/">home</NavLink>
                    <NavLink activeClassName="active" to="/about">about</NavLink>
                    <i className="toggle-menu fas fa-angle-down"></i>
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

export default Header;
