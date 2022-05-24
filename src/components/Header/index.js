import React from 'react'
import './Header.sass';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <Link to='/' className='header__logo'>Movie</Link>
        <nav className='header__nav'>
            {/* <div className="header__nav__link">Top</div> */}
            <Link to='/topmovies' className='header__nav__link'>Top</Link>
            <Link to='/newmovies' className="header__nav__link">New Movies</Link>
            <Link to='/tvshows' className="header__nav__link">Shows</Link>
            <Link to='/random' className="header__nav__link">Random</Link>
        </nav>
        <input className='header__search' type="text" />
    </header>
  )
}

export default Header;