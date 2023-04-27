import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const navbarToggle = (e) => {
    console.log(e.target.classList);
    navRef.current.classList.toggle("active");
  };
  return (
    <header>
      <div className="container">
        <div className="logo_nav">
          <div className="logo">
            <img src="/assets/images/cast_logo.png" alt="" />
          </div>
        </div>
         <div ref={navRef} className="account_search">
            <ul className="menu_items">
                <li className="menu_item">
                  <Link to="/casting_call">Casting call</Link>
                </li>
                <li className="menu_item">
                  <Link to="/magazine">Magazine</Link>
                </li>
                <li className="menu_item">
                  <Link to="contact">Contact us</Link>
                </li>
            </ul>
            <div className="form_button">
              <form action="">
                {/* <input type="search" placeholder="Search..." /> */}
                <button type="submit" className="search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <button className="header_sign_up">
                <Link to="/">Sign up</Link>
              </button>
              <button className="header_sign_in">
                <Link to="/">Sign in</Link>
              </button>
            </div>
        </div>
        <div className="navbar_toggler">
          <button onClick={(e) => navbarToggle(e)}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-3 header_logo">
            <Link to="/" className="logo">
              <img src="/assets/images/cast_logo.svg" alt="logo.img" />
            </Link>
          </div>
          <div className="col header_navigation">
            <div className="row">
              <div className="col header_navigatiocn_left">
                <nav className="navigation_menu">
                  <ul className="menu_items">
                    <li className="menu_item">
                      <Link to="/casting_call">Casting call</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/magazine">Magazine</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="contact">Contact us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col header_navigation_right">
                <div className="row">
                  <form action="">
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                  <button className="header_sign_up">
                    <Link to="/">Sign up</Link>
                  </button>
                  <button className="header_sign_in">
                    <Link to="/">Sign in</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar_toggler">
            <button>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default Navbar;
