import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills } from '../data/portfolioData';
import './About.css';

export default function About() {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// About Me</span>
                    <h2 className="section-title">Who I Am</h2>
                    <p className="section-subtitle">
                        A snapshot of my journey, passions, and technical expertise
                    </p>
                </div>

                <div className={`about__grid ${isVisible ? 'about__grid--visible' : ''}`}>
                    <div className="about__bio">
                        <div className="about__bio-card glass neon-border">
                            <div className="about__bio-header">
                                <div className="about__bio-terminal">
                                    <span className="about__terminal-dot about__terminal-dot--red" />
                                    <span className="about__terminal-dot about__terminal-dot--yellow" />
                                    <span className="about__terminal-dot about__terminal-dot--green" />
                                </div>
                                <span className="about__bio-filename">about_me.js</span>
                            </div>
                            <div className="about__bio-content">
                                <div className="about__bio-line">
                                    <span className="about__line-number">1</span>
                                    <span className="about__code-keyword">const</span>{' '}
                                    <span className="about__code-var">developer</span>{' = {'}
                                </div>
                                <div className="about__bio-line">
                                    <span className="about__line-number">2</span>
                                    {'  '}<span className="about__code-key">name</span>:{' '}
                                    <span className="about__code-string">"N. Sri Siri"</span>,
                                </div>
                                <div className="about__bio-line">
                                    <span className="about__line-number">3</span>
                                    {'  '}<span className="about__code-key">role</span>:{' '}
                                    <span className="about__code-string">"CS Engineer"</span>,
                                </div>
                                <div className="about__bio-line">
                                    <span className="about__line-number">4</span>
                                    {'  '}<span className="about__code-key">location</span>:{' '}
                                    <span className="about__code-string">"Hyderabad, India"</span>,
                                </div>
                                <div className="about__bio-line">
                                    <span className="about__line-number">5</span>
                                    {'  '}<span className="about__code-key">passion</span>:{' '}
                                    <span className="about__code-string">"Building the future"</span>,
                                </div>
                                <div className="about__bio-line">
                                    <span className="about__line-number">6</span>
                                    {'};'}
                                </div>
                            </div>
                            <p className="about__bio-text">
                                Passionate CS engineer specializing in web development, network programming,
                                and AI-driven projects. Experienced in React, JavaScript, TCP networking, and
                                deploying scalable apps. Currently exploring Master's opportunities in Germany.
                            </p>

                            <div className="about__tags">
                                <span className="about__tag">🌐 Web Development</span>
                                <span className="about__tag">🔌 Network Programming</span>
                                <span className="about__tag">🤖 AI/ML</span>
                                <span className="about__tag">☁️ Cloud & DevOps</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__skills">
                        <h3 className="about__skills-title">Core Competencies</h3>
                        <div className="about__skills-list">
                            {skills.map((skill, i) => (
                                <div
                                    key={skill.name}
                                    className="about__skill"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className="about__skill-header">
                                        <span className="about__skill-icon">{skill.icon}</span>
                                        <span className="about__skill-name">{skill.name}</span>
                                        <span className="about__skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="about__skill-bar">
                                        <div
                                            className="about__skill-progress"
                                            style={{
                                                width: isVisible ? `${skill.level}%` : '0%',
                                                background: `linear-gradient(90deg, var(--neon-blue), ${skill.color})`,
                                                transitionDelay: `${i * 0.15 + 0.3}s`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
