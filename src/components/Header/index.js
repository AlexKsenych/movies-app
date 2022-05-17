import React from 'react'
import './Header.sass';

const Header = () => {
  return (
    <header className='header'>
        <div className='header__logo'>Movie</div>
        <nav className='header__nav'>
            <div className="header__nav__link">Top</div>
            <div className="header__nav__link">Movies</div>
            <div className="header__nav__link">TV shows</div>
            <div className="header__nav__link">Random</div>
        </nav>
        <input className='header__search' type="text" />
    </header>
  )
}

export default Header;