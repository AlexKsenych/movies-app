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
            <NavLink to='/' className='header__logo'>
                Movie
            </NavLink>
            <nav className='header__nav'>
                <NavLink
                    to='/topmovies'
                    className={({ isActive }) => getClassName(isActive)}
                >
                    Top
                </NavLink>
                <NavLink
                    to='/newmovies'
                    className={({ isActive }) => getClassName(isActive)}
                >
                    New Movies
                </NavLink>
                <NavLink
                    to='/tvshows'
                    className={({ isActive }) => getClassName(isActive)}
                >
                    Shows
                </NavLink>
                <NavLink
                    to='/random'
                    className={({ isActive }) => getClassName(isActive)}
                >
                    Random
                </NavLink>
            </nav>
            <HeaderSearch />
        </header>
    )
}

export default Header
