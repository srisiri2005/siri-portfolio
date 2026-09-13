import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { certificates } from '../data/portfolioData';
import './Certificates.css';

export default function Certificates() {
    const [ref, isVisible] = useIntersectionObserver();
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="certificates section" id="certificates" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Achievements</span>
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Professional courses and certifications I've completed
                    </p>
                </div>

                <div className={`certificates__grid ${isVisible ? 'certificates__grid--visible' : ''}`}>
                    {certificates.map((cert, i) => (
                        <div
                            key={cert.id}
                            className={`certificates__card neon-border ${hoveredId === cert.id ? 'certificates__card--hovered' : ''}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                            onMouseEnter={() => setHoveredId(cert.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="certificates__card-image">
                                <div className="certificates__card-icon">{cert.icon}</div>
                            </div>

                            <div className="certificates__card-body">
                                <h3 className="certificates__card-title">{cert.title}</h3>
                                <p className="certificates__card-issuer">{cert.issuer}</p>
                                <p className="certificates__card-date">{cert.date}</p>
                                <p className="certificates__card-desc">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
