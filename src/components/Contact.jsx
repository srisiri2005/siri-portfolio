import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { socialLinks } from '../data/portfolioData';
import './Contact.css';

const SocialIcon = ({ type }) => {
    switch (type) {
        case 'github':
            return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
        case 'linkedin':
            return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
        case 'instagram':
            return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
        case 'email':
            return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
        default:
            return null;
    }
};

export default function Contact() {
    const [ref, isVisible] = useIntersectionObserver();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="contact section" id="contact" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? Let's connect!
                    </p>
                </div>

                <div className={`contact__grid ${isVisible ? 'contact__grid--visible' : ''}`}>
                    {/* Form */}
                    <form className="contact__form glass neon-border" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="contact-name" className="contact__label">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="contact__input"
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="contact-email" className="contact__label">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="contact__input"
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="contact-message" className="contact__label">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                rows="5"
                                className="contact__input contact__textarea"
                            />
                        </div>
                        <button
                            type="submit"
                            className="contact__submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="contact__spinner" />
                            ) : submitted ? (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>

                    {/* Info */}
                    <div className="contact__info">
                        <div className="contact__info-card glass neon-border">
                            <div className="contact__info-icon">📍</div>
                            <h3 className="contact__info-title">Location</h3>
                            <p className="contact__info-text">Hyderabad, Telangana, India</p>
                        </div>

                        <div className="contact__info-card glass neon-border">
                            <div className="contact__info-icon">✉️</div>
                            <h3 className="contact__info-title">Email</h3>
                            <p className="contact__info-text">srisirinaragoni@gmail.com</p>
                        </div>

                        {/* Map placeholder */}
                        <div className="contact__map glass neon-border">
                            <div className="contact__map-inner">
                                <div className="contact__map-dot" />
                                <div className="contact__map-ring" />
                                <div className="contact__map-label">
                                    <span className="contact__map-flag">🇮🇳</span>
                                    <span>Hyderabad, India</span>
                                </div>
                                {/* Stylized India outline */}
                                <svg className="contact__map-svg" viewBox="0 0 200 200" fill="none">
                                    <path d="M100 20 L115 35 L130 30 L140 45 L155 50 L150 65 L160 80 L155 95 L145 110 L150 125 L140 140 L130 155 L120 165 L100 180 L90 170 L75 160 L65 145 L60 130 L50 115 L55 100 L45 85 L50 70 L60 55 L70 40 L85 30 Z"
                                        stroke="var(--neon-blue)" strokeWidth="1.5" fill="rgba(0, 212, 255, 0.05)" opacity="0.6" />
                                </svg>
                            </div>
                        </div>

                        <div className="contact__socials">
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__social-link neon-border"
                                    aria-label={link.name}
                                    title={link.name}
                                >
                                    <SocialIcon type={link.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
