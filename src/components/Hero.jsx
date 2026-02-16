import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const codeSnippets = [
    'const app = express();',
    'socket.connect(host, port);',
    'npm run deploy',
    'git push origin main',
    'docker-compose up -d',
    '<Component />',
    'async/await',
    'res.json(data)',
    'useState()',
    'TCP.listen(8080)',
    'import React from "react"',
    'SELECT * FROM users',
    'fetch("/api/data")',
    'router.get("/")',
];

function Particle({ style }) {
    return <div className="hero__particle" style={style} />;
}

function FloatingCode({ text, style }) {
    return (
        <div className="hero__floating-code" style={style}>
            {text}
        </div>
    );
}

export default function Hero() {
    const canvasRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const subtitles = ['Computer Science Engineer', 'Full-Stack Developer', 'Network Programmer', 'AI Enthusiast'];
    const [subtitleIdx, setSubtitleIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter effect
    useEffect(() => {
        const current = subtitles[subtitleIdx];
        let timeout;

        if (!isDeleting && typedText === current) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && typedText === '') {
            setIsDeleting(false);
            setSubtitleIdx((prev) => (prev + 1) % subtitles.length);
        } else {
            timeout = setTimeout(() => {
                setTypedText(
                    isDeleting
                        ? current.substring(0, typedText.length - 1)
                        : current.substring(0, typedText.length + 1)
                );
            }, isDeleting ? 30 : 80);
        }

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, subtitleIdx]);

    // Particle canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class P {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 80; i++) {
            particles.push(new P());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const floatingCodes = codeSnippets.map((text, i) => ({
        text,
        style: {
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
        },
    }));

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero">
            <canvas ref={canvasRef} className="hero__canvas" />

            <div className="hero__bg-orb hero__bg-orb--1" />
            <div className="hero__bg-orb hero__bg-orb--2" />
            <div className="hero__bg-orb hero__bg-orb--3" />

            {floatingCodes.map((code, i) => (
                <FloatingCode key={i} text={code.text} style={code.style} />
            ))}

            <div className="hero__content">
                <div className="hero__text">
                    <div className="hero__greeting">
                        <span className="hero__greeting-line" />
                        <span className="hero__greeting-text">Hello, I'm</span>
                    </div>

                    <h1 className="hero__name">
                        N. Sri <span className="hero__name-accent">Siri</span>
                    </h1>

                    <div className="hero__subtitle">
                        <span className="hero__subtitle-text">{typedText}</span>
                        <span className="hero__cursor">|</span>
                    </div>

                    <p className="hero__description">
                        Building elegant solutions through code. Passionate about web development,
                        network programming, and pushing the boundaries of technology.
                    </p>

                    <div className="hero__actions">
                        <button className="hero__btn hero__btn--primary" onClick={() => handleScroll('projects')}>
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                        <a href="/resume.pdf" download className="hero__btn hero__btn--secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                            <span>Download Resume</span>
                        </a>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-number">5+</span>
                            <span className="hero__stat-label">Projects</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">8+</span>
                            <span className="hero__stat-label">Technologies</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">2+</span>
                            <span className="hero__stat-label">Years Coding</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__avatar-wrapper">
                        <div className="hero__avatar-ring" />
                        <div className="hero__avatar-ring hero__avatar-ring--2" />
                        <div className="hero__avatar">
                            <img
                                src="/profile.jpg"
                                alt="N. Sri Siri"
                                className="hero__avatar-img"
                            />
                        </div>
                        <div className="hero__avatar-dot hero__avatar-dot--1" />
                        <div className="hero__avatar-dot hero__avatar-dot--2" />
                        <div className="hero__avatar-dot hero__avatar-dot--3" />
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator" onClick={() => handleScroll('about')}>
                <span className="hero__scroll-text">Scroll</span>
                <div className="hero__scroll-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                </div>
            </div>
        </section>
    );
}
