import React from 'react'
import './Header.sass'
import { NavLink } from 'react-router-dom'
import HeaderSearch from './HeaderSearch'

const Header = () => {
    const getClassName = (isActive) => {
        return isActive ? 'header__nav__link link_active' : 'header__nav__link'
    }

    return (
        <header className='header'>
            <NavLink to='/movies-app/' className='header__logo'>
                MOVIES-APP
            </NavLink>
            <NavLink to='/movies-app/' className='header__logo_mini hidden'>
                M
            </NavLink>
            <nav className='header__nav'>
                <NavLink
                    to='/movies-app/'
                    className={({ isActive }) => getClassName(isActive)}
                >
                    Movies
                </NavLink>
                <NavLink
                    to='/movies-app/tv'
                    className={({ isActive }) => getClassName(isActive)}
                >
                    TV Shows
                </NavLink>
            </nav>
            <HeaderSearch />
            <div className='header__container hidden'></div>
        </header>
    )
}

export default Header
