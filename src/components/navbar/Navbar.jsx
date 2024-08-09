import React, { useState } from "react";
import styles from './Navbar.module.css';
import { Fade } from 'react-reveal';

function Navbar () {
const [menuOpen, setMenuOpen] = useState(false);

    return (      
        <div>
            <Fade down distance='10%' duration={1500}>
        <nav className={styles.navbar}>
            
            <a className={styles.title} href="/">WorkMobile</a>
            
            <div className={styles.menu}>
                   <div className={styles.menuBtn}>
                    <img src={menuOpen ? "./assets/images/closeIcon.png" : "./assets/images/menuIcon.png" }
                     alt="menu-button"
                      onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#team">Team</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        </Fade>
        </div>
    );
}
export default Navbar