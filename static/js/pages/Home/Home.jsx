import React, { useEffect } from 'react';
import Classes from './Home.module.css';
import Hero from './Sections/Hero/Hero.jsx';
import About from './Sections/About/About.jsx';
import Reviews from './Sections/Reviews/Reviews.jsx';
import Services from './Sections/Services/Services.jsx';
import FAQ from './Sections/FAQ/FAQ.jsx';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigateTo = useNavigate();
    const location = useLocation();

    const scrollToElement = (elementId, offset = 0) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop + offset;
            window.scroll({ top: targetPosition, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollInfo = location?.state?.scrollTo;
        if (!scrollInfo) return;
        const { id, offset = 0 } = scrollInfo;
        requestAnimationFrame(() => {
            setTimeout(() => {
                scrollToElement(id, offset);
                navigateTo(location.pathname, { replace: true, state: {} });
            }, 0);
        });
    }, [location.state, location.pathname, navigateTo]);

    return (
        <>
            <Helmet>
                <title>Keerthan V | Full Stack Developer</title>
                <meta name="description" content="Keerthan V — Full Stack Developer with 1+ year experience in React.js, Next.js, Spring Boot, and PHP. Building scalable, responsive, production-ready web applications." />
                <meta name="keywords" content="Keerthan V, Full Stack Developer, React.js, Spring Boot, Next.js, PHP, Java, MySQL, AWS, Portfolio" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className={Classes.pageWrapper}>
                <Hero />
                <About />
                <Services />
                <Reviews />
                <FAQ />
            </div>
        </>
    );
}
