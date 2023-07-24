function Navbar() {
  return (
    <div className="container">
      <nav>
        <h2 className="logo-text">NC NEWS</h2>
        <h4 className="menu-item-1">Articles</h4>
        <h4 className="menu-item-2">About Us</h4>
        <h4 className="menu-item-3">Contact</h4>
        <div className="icons-container">
          <button className="search">
            <img
              src="icons/search-icon.png"
              alt="search-icon"
              className="search-icon"
            ></img>
          </button>
          <button className="account">
            <img
              src="/icons/account-white-icon.png"
              className="account-icon"
              alt="account-icon"
            ></img>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
