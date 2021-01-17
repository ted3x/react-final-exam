import React,{ Fragment} from 'react';
import {  Link } from 'react-router-dom';
import FindCharacter from './FindCharacter/findCharacter'

const NavBar = () => {
  return <Fragment>
    <div class="navbar">
      <div className="navbar-item">
        <Link to="/" className="navbar-item-link">Main Page</Link>
      </div>
      <div className="navbar-item">
        <Link to="/characters" className="navbar-item-link">Characters</Link>
      </div>
      <div className="navbar-item">
        <Link to="/sign-up" className="navbar-item-link">Sign up</Link>
      </div>
      <div className="navbar-item">
        <Link to="/about" className="navbar-item-link">About me</Link>
      </div>
      <FindCharacter/>
    </div>
  </Fragment>
}

const Header = () => {
    return <NavBar/>
}
export default Header;