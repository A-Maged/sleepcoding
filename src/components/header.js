import React from 'react'
import { NavLink, Link } from "react-router-dom"
import SearchForm from './search-form'

function onSearchFormSubmit(value){
    console.log(value)
}

function handleNavClick(e) {
    // if isActive then showMenu()
    // else then go to route
}

function showMenu(e) {
    e.preventDefault();
    // show menu
}


const Header = () => {
    return (
        <header>
            <div className="container">

                <SearchForm onSubmit={onSearchFormSubmit} />

                <nav>
                    <NavLink exact activeClassName="active" to="/" onClick={handleNavClick}>home</NavLink>
                    <NavLink activeClassName="active" to="/about" onClick={handleNavClick}>about</NavLink>
                    <NavLink activeClassName="active" to="/post/:id" onClick={showMenu} className="menu-link">Menu</NavLink>
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
