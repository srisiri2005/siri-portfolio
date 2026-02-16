import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { timeline } from '../data/portfolioData';
import './Timeline.css';

export default function Timeline() {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className="timeline section" id="timeline" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Journey</span>
                    <h2 className="section-title">Experience & Education</h2>
                    <p className="section-subtitle">
                        My academic and professional milestones
                    </p>
                </div>

                <div className={`timeline__container ${isVisible ? 'timeline__container--visible' : ''}`}>
                    <div className="timeline__line" />

                    {timeline.map((item, i) => (
                        <div
                            key={i}
                            className={`timeline__item timeline__item--${i % 2 === 0 ? 'left' : 'right'}`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                        >
                            <div className="timeline__dot">
                                <span className="timeline__dot-icon">{item.icon}</span>
                                <div className="timeline__dot-ring" />
                            </div>

                            <div className="timeline__card glass neon-border">
                                <div className="timeline__card-header">
                                    <span className={`timeline__type timeline__type--${item.type}`}>
                                        {item.type}
                                    </span>
                                    <span className="timeline__year">{item.year}</span>
                                </div>
                                <h3 className="timeline__title">{item.title}</h3>
                                <h4 className="timeline__subtitle">{item.subtitle}</h4>
                                <p className="timeline__desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
