import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { RiMenuAddFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const closeMenu = useRef(null);

  const { pathname } = useLocation();

  const handleClose = (e) => {
    if (closeMenu.current && !closeMenu.current.contains(e.target)) {
      setSmallScreen(false);
      setOpenMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);

    return () => document.removeEventListener('mousedown', handleClose);
  },[])

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">liberr</span>
          </Link>
          <span className="dot">.</span>
          <RiMenuAddFill
            className="RiMenuAddFill"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>

        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="user" />

              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/myGigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/" onClick={logout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link className="link" to="/login">
                <span>Sign in</span>
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>

        {/* For small Screen  */}
        <span
          onClick={() => setSmallScreen(!smallScreen)}
          className={smallScreen ? "display" : "FiMenu"}
        >
          <FiMenu />
        </span>
        {smallScreen && (
          <div className="smallScreen">
            <span onClick={() => setSmallScreen(false)} className="MdClose">
              <MdClose />
            </span>
            <div className="smallScreenLinks" ref={closeMenu} onClick={handleClose}>
              <span onClick={() => setSmallScreen(false)}>Liverr Business</span>
              <span onClick={() => setSmallScreen(false)}>Explore</span>
              <span onClick={() => setSmallScreen(false)}>English</span>
              {!currentUser?.isSeller && (
                <Link to="/register" className="link">
                <span onClick={() => setSmallScreen(false)}>
                  Become a Seller
                </span>
                </Link>
              )}

              {currentUser ? (
                <div className="smallScreenUser" onClick={() => setOpen(!open)}>
                  <img
                    src={currentUser.img || "/img/noavatar.jpg"}
                    alt="user"
                  />

                  <span>{currentUser?.username}</span>
                  {open && (
                    <div className="smallScreenOptions">
                      {currentUser.isSeller && (
                        <>
                          <Link className="link" to="/myGigs">
                            Gigs
                          </Link>
                          <Link className="link" to="/add">
                            Add New Gig
                          </Link>
                        </>
                      )}
                      <Link className="link" to="/orders">
                        Orders
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link className="link" to="/">
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link className="link" to="/login">
                    <span onClick={() => setSmallScreen(false)}>Sign in</span>
                  </Link>
                  <Link className="link" to="/register">
                    <button onClick={() => setSmallScreen(false)}>Join</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <hr />
      {openMenu && (
        <>
          <div className="menu" ref={closeMenu} onClick={handleClose}>
            <Link className="link menuLink" to="/">
              Graphics Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Anim.
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Trans.
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Dig. Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Prog. & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
