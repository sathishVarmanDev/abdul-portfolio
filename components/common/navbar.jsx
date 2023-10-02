import React, { useState } from 'react';
import ProfilePicture from "@/components/profilePicture";
import styles from "@/styles/Navbar.module.css";

export default function Navbar({ isMenuOpen, setMenuOpen }) {

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (event,hash) => {
    const element = document.getElementById(hash);
    if (element)
      element.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <div>
      <div className={`${styles.menuContainer}`}>
        <ProfilePicture />
        <div className={`${styles.navlink}`} onClick={(event) => handleLinkClick(event,"home")}>HOME</div>
        <div className={`${styles.navlink}`} onClick={(event) => handleLinkClick(event,"portfolio")}>PORTFOLIO</div>
        <div className={`${styles.navlink}`} onClick={(event) => handleLinkClick(event,"about")}>ABOUT</div>
      </div>

      {/* hamburger-menu */}
      <div className={`${styles.hamburgerMenuContainer}`}>
        <span className={`${styles.name}`} >Sathish Varman</span>
        <input type="checkbox" id="toggle" className={`${styles.toggle}`} checked={isMenuOpen} onChange={toggleMenu} />
        <label for="toggle" className={`${styles.hamburgerMenu}`}>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
        </label>
        <nav className={isMenuOpen ? `${styles.mobileMenu}` : `${styles.mobileMenuHidden}`}>
          <ul className={`${styles.mobileMenuLinksContainer}`}>
            <li><div className={`${styles.mobileMenuLinks}`} onClick={(event) => {
              setTimeout(() => handleLinkClick(event, "home"), 500)
              closeMenu()
            }}>Home</div></li>
            <li><div className={`${styles.mobileMenuLinks}`} onClick={(event) => {
              setTimeout(() => handleLinkClick(event, "portfolio"), 500)
              closeMenu()
            }}>PORTFOLIO</div></li>
            <li><div className={`${styles.mobileMenuLinks}`} onClick={(event) => {
              setTimeout(() => handleLinkClick(event, "about"), 500)
              closeMenu()
            }}>ABOUT</div></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}