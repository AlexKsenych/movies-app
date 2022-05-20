import React from 'react'
import './Header.sass';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <div className='header__logo'>Movie</div>
        <nav className='header__nav'>
            {/* <div className="header__nav__link">Top</div> */}
            <Link to='/topmovies' className='header__nav__link'>Top</Link>
            <div className="header__nav__link">New Movies</div>
            <div className="header__nav__link">Shows</div>
            <div className="header__nav__link">Random</div>
        </nav>
        <input className='header__search' type="text" />
    </header>
  )
}

export default Header;