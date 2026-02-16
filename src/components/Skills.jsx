import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { techIcons } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className="skills section" id="skills" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Tech Stack</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Tools and technologies I use to bring ideas to life
                    </p>
                </div>

                <div className={`skills__grid ${isVisible ? 'skills__grid--visible' : ''}`}>
                    {techIcons.map((tech, i) => (
                        <div
                            key={tech.name}
                            className="skills__item neon-border"
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <div
                                className="skills__item-icon"
                                style={{ '--icon-color': tech.color }}
                            >
                                <span className="skills__icon-text">{tech.icon}</span>
                                <div className="skills__item-ring" style={{ borderColor: tech.color }} />
                            </div>
                            <span className="skills__item-name">{tech.name}</span>
                            <div className="skills__item-glow" style={{ background: tech.color }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
