import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BottomToTop from './Animations/BottomToTop';
import { ScrollToTop } from './Hooks/usePreventScrolling';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home/Home.jsx';

function App() {
    return (
        <HelmetProvider>
            <div className="app-shell">
                <ScrollToTop />
                <BottomToTop fromY={40} delay={0} duration={0.35}>
                    <Navbar />
                </BottomToTop>
                <main className="app-main">
                    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#010915' }} />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default App;
