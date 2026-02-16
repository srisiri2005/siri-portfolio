import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
    const [ref, isVisible] = useIntersectionObserver();
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="projects section" id="projects" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects that showcase my passion and expertise
                    </p>
                </div>

                <div className={`projects__grid ${isVisible ? 'projects__grid--visible' : ''}`}>
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className={`projects__card neon-border ${hoveredId === project.id ? 'projects__card--hovered' : ''}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div
                                className="projects__card-image"
                                style={{ background: project.gradient }}
                            >
                                <div className="projects__card-icon">{project.icon}</div>
                                <div className="projects__card-category">{project.category}</div>
                                <div className="projects__card-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                                    </a>
                                </div>
                            </div>

                            <div className="projects__card-body">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-desc">{project.description}</p>
                                <div className="projects__card-tech">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="projects__tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="projects__card-glow" style={{ background: project.gradient }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
