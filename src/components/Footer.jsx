import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer" id="footer">
            <div className="footer__glow" />
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <a href="#hero" className="footer__logo" onClick={(e) => handleClick(e, '#hero')}>
                            <span className="footer__logo-bracket">{'<'}</span>
                            <span className="footer__logo-text">Sri Siri</span>
                            <span className="footer__logo-bracket">{'/>'}</span>
                        </a>
                        <p className="footer__tagline">
                            Building the future, one line of code at a time.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__link-list">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="footer__link"
                                        onClick={(e) => handleClick(e, link.href)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__contact-info">
                        <h4 className="footer__heading">Contact</h4>
                        <div className="footer__contact-item">
                            <span>📍</span> Hyderabad, India
                        </div>
                        <div className="footer__contact-item">
                            <span>✉️</span> srisirinaragoni@gmail.com
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} N. Sri Siri. All rights reserved.
                    </p>
                    <p className="footer__made-with">
                        Made with <span className="footer__heart">❤️</span> and <span className="footer__code">{'</>'}</span> Code
                    </p>
                </div>
            </div>
        </footer>
    );
}
