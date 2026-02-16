import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner">
                <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    <span className="navbar__logo-icon">{'<'}</span>
                    <span className="navbar__logo-text">Sri Siri</span>
                    <span className="navbar__logo-icon">{'/>'}</span>
                </a>

                <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                            <span className="navbar__link-indicator"></span>
                        </a>
                    ))}
                    <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
                        )}
                    </button>
                </div>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
