import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { certificates } from '../data/portfolioData';
import './Certificates.css';

export default function Certificates() {
    const [ref, isVisible] = useIntersectionObserver();
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedCert, setSelectedCert] = useState(null);

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
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="certificates__card-image">
                                {cert.image ? (
                                    <img src={cert.image} alt={cert.title} className="certificates__image-preview" />
                                ) : (
                                    <div className="certificates__card-icon">{cert.icon}</div>
                                )}
                            </div>

                            <div className="certificates__card-body">
                                <h3 className="certificates__card-title">{cert.title}</h3>
                                <p className="certificates__card-issuer">{cert.issuer}</p>
                                <p className="certificates__card-date">{cert.date}</p>
                                <p className="certificates__card-desc">{cert.description}</p>
                                <span className="certificates__view-btn">Click to view</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCert && (
                <div className="certificates__modal" onClick={() => setSelectedCert(null)}>
                    <div className="certificates__modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="certificates__modal-close" onClick={() => setSelectedCert(null)}>
                            &times;
                        </button>
                        {selectedCert.image ? (
                            <img src={selectedCert.image} alt={selectedCert.title} className="certificates__modal-image" />
                        ) : (
                            <div className="certificates__modal-placeholder">
                                <span style={{fontSize: '4rem', marginBottom: '1rem'}}>{selectedCert.icon}</span>
                                <h2>{selectedCert.title}</h2>
                                <p>Please add the certificate image to <code>public{selectedCert.image}</code> to view it here.</p>
                            </div>
                        )}
                        <div className="certificates__modal-info">
                            <h3>{selectedCert.title}</h3>
                            <p>{selectedCert.issuer} &bull; {selectedCert.date}</p>
                            {selectedCert.url && (
                                <a href={selectedCert.url} target="_blank" rel="noopener noreferrer" className="certificates__verify-link">
                                    Verify Certificate
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
