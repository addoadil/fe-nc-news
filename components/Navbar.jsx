import React, { useState, useEffect } from 'react';
import hamburgerIcon from '/icons/Hamburger_icon.svg.png'
import searchIcon from '/icons/search-icon.png'
import accountIcon from '/icons/account-white-icon.png'



function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMobileMenuOpen(true);
      } else {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      <nav>
        <h2 className="logo-text">NC NEWS</h2>
        <div className={`hamburger-menu ${mobileMenuOpen ? 'open' : 'close'}`}>
        </div>

        <div className={`menu-items ${mobileMenuOpen ? 'open' : 'close'}`}>
          <h4 className="menu-item-1">Articles</h4>
          <h4 className="menu-item-2">About Us</h4>
          <h4 className="menu-item-3">Contact</h4>
          <h4 className='menu-item-4'>Account</h4>
          <h4 className='menu-item-5'>Search</h4>
        </div>

        <div className="icons-container">
          <img
            className="hamburger-icon"
            src={hamburgerIcon } 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          />
          <button className={`search icon ${mobileMenuOpen ? 'show' : 'hide'}`}>
            <img
              src={searchIcon}
              alt="search-icon"
              className="search-icon"
            />
          </button>
          <button className={`account icon ${mobileMenuOpen ? 'show' : 'hide'}`}>
            <img
              src={accountIcon}
              className="account-icon"
              alt="account-icon"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
