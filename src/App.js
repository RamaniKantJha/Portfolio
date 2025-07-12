import React, { useEffect, useState } from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { FaChevronUp } from 'react-icons/fa';

const App = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add('dark-mode');
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                style={{
                    position: 'fixed',
                    bottom: 32,
                    right: 28,
                    zIndex: 9999,
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    borderRadius: '50%',
                    boxShadow: 'var(--shadow-primary)',
                    padding: '0.7em 0.9em',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    color: 'var(--color-bg)',
                    opacity: showTop ? 1 : 0,
                    pointerEvents: showTop ? 'auto' : 'none',
                    transition: 'opacity 0.4s, background 0.3s, color 0.3s, box-shadow 0.3s',
                }}
                className="back-to-top-btn"
            >
                <FaChevronUp />
            </button>

            <Header />
            <Nav />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default App;