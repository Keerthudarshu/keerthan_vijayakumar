import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Classes from './Navbar.module.css';
import Logo from '../Logo/Logo';
import useScreenWidth from '../../Hooks/useScreenWidth';
import { scrollToElement } from '../../utils/scrollToElement';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false || window.innerWidth < 480);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);

    const navigateTo = useNavigate();
    const location = useLocation();
    const [activePage] = useState(location.pathname);

    const getMargin = () => {
        if (windowWidth < 700) return scrolled ? '10px 5%' : '10px 5%';
        else if (windowWidth < 1000) return scrolled ? '10px 12%' : '10px 5%';
        else if (windowWidth < 1200) return scrolled ? '10px 20%' : '10px 5%';
        else return scrolled ? '10px 25%' : '10px 7%';
    };

    const isMobile = useScreenWidth() < 480;
    const isCompactNav = windowWidth <= 900;

    const handleScrollOrNavigate = (id, offset = 0) => {
        if (location.pathname !== '/') {
            navigateTo('/', { state: { scrollTo: { id, offset } } });
        } else {
            scrollToElement(id, offset);
        }
        setMenuOpen(false);
    };

    const handleHomeClick = () => {
        setMenuOpen(false);
    };

    const handleHomeRoute = () => {
        if (location.pathname !== '/') {
            navigateTo('/');
        }
        setMenuOpen(false);
    };

    return (
        <motion.div
            className={Classes.navbar}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                margin: getMargin(),
                padding: isMobile || scrolled ? '0 30px' : '0',
                backdropFilter: isMobile || scrolled ? 'blur(24px)' : 'none',
                backgroundColor: isMobile || scrolled ? '#00000080' : 'rgba(0, 0, 0, 0)',
                borderRadius: isMobile || scrolled ? '40px' : '0',
                boxShadow: isMobile || scrolled
                    ? 'rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 2px 8px 0px'
                    : 'none',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className={Classes.gridLeft}>
                <a href="/">
                    <motion.div
                        animate={{ height: isMobile || scrolled ? '3.2rem' : '4rem' }}
                        transition={{ duration: 0.3 }}
                        className={Classes.logoSlot}
                    >
                        <Logo />
                    </motion.div>
                </a>
            </div>
            {!isCompactNav && (
                <ul className={Classes.navLinks}>
                    <li className={activePage === '/' ? Classes.navActive : ''}>
                        <a href="/" onClick={handleHomeClick}><h5>Home</h5></a>
                    </li>
                    <li onClick={() => handleScrollOrNavigate('about-section', -120)}>
                        <h5>About</h5>
                    </li>
                    <li onClick={() => handleScrollOrNavigate('services-section', -30)}>
                        <h5>Skills</h5>
                    </li>
                    <li onClick={() => handleScrollOrNavigate('reviews-section', -50)}>
                        <h5>Projects</h5>
                    </li>
                    <li onClick={() => handleScrollOrNavigate('faq-section', 0)}>
                        <h5>Contact</h5>
                    </li>
                </ul>
            )}
            <div className={Classes.gridRight}>
                {!isCompactNav ? (
                    <a href="mailto:keerthudarshu06@gmail.com">
                        <button className={Classes.quoteBtn}>
                            <h5>{isMobile ? 'Hire' : 'Hire Me'}</h5>
                        </button>
                    </a>
                ) : (
                    <button
                        type="button"
                        className={Classes.menuToggle}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                )}
            </div>
            {isCompactNav && menuOpen && (
                <motion.div
                    className={Classes.mobileMenu}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <button type="button" onClick={handleHomeRoute} className={Classes.mobileMenuItem}>
                        <h5>Home</h5>
                    </button>
                    <button type="button" onClick={() => handleScrollOrNavigate('about-section', -120)} className={Classes.mobileMenuItem}>
                        <h5>About</h5>
                    </button>
                    <button type="button" onClick={() => handleScrollOrNavigate('services-section', -30)} className={Classes.mobileMenuItem}>
                        <h5>Skills</h5>
                    </button>
                    <button type="button" onClick={() => handleScrollOrNavigate('reviews-section', -50)} className={Classes.mobileMenuItem}>
                        <h5>Projects</h5>
                    </button>
                    <button type="button" onClick={() => handleScrollOrNavigate('faq-section', 0)} className={Classes.mobileMenuItem}>
                        <h5>Contact</h5>
                    </button>
                    <a href="mailto:keerthudarshu06@gmail.com" className={Classes.mobileMenuCta} onClick={() => setMenuOpen(false)}>
                        <h5>Hire Me</h5>
                    </a>
                </motion.div>
            )}
        </motion.div>
    );
}
