import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Linkedin } from 'lucide-react';
import logo from './asset/logo.png';
import cavendishImg from './asset/cavendish.png';
import wishto2026Img from './asset/wishto2026.png';
import momentImg from './asset/moment.png';
import eldritchImg from './asset/eldritch.png';
import './styles.css';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const works = [
        {
            title: "Cavendish House Hostel",
            img: cavendishImg,
            link: "https://cavendishouse.vercel.app/",
            desc: "A modern booking booking and info site for a premium hostel. Features gallery, booking forms, and location info.",
            tags: ["React", "Glassmorphism", "Booking System"]
        },
        {
            title: "WishTo2026",
            img: wishto2026Img,
            link: "https://srijan-xi.github.io/wishto2026/",
            desc: "A vibrant, celebratory site welcoming the new year with style. High impact visual animations and countdowns.",
            tags: ["Animation", "Event", "Responsive"]
        },
        {
            title: "Moment Maker",
            img: momentImg,
            link: "https://srijan-xi.github.io/Moment_Maker/",
            desc: "A minimalist photography portfolio showcased captured moments. Clean masonry layout with lightbox functionalities.",
            tags: ["Portfolio", "Photography", "Gallery"]
        },
        {
            title: "Eldritch-Eclipse",
            img: eldritchImg,
            link: "https://srijan-xi.github.io/Eldritch-Eclipse/",
            desc: "An immersive dark-themed game site. Features rich atmosphere, lore sections, and interactive elements.",
            tags: ["Game Dev", "Dark UI", "Immersion"]
        }
    ];

    return (
        <div className="app">
            {/* Ambient Background */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <nav className="navbar glass-nav">
                <div className="container nav-content">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Unparalleled Scholar Logo" className="logo-img" />
                        Unparalleled Scholar
                    </Link>
                    <div className="nav-links">
                        <Link to="/" className="btn-glass" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            <section style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Portfolio</h2>
                        <h3 className="section-headline">Crafted with Precision</h3>
                        <p className="service-desc">Explore our collection of digital experiences designed to impact and inspire.</p>
                    </div>

                    <div className="cards-grid">
                        {works.map((work, index) => (
                            <div key={index} className="glass service-card" style={{ padding: 0 }}>
                                <div style={{ height: '250px', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'relative' }} className="group">
                                    <img src={work.img} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="group-hover:scale-105" />
                                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover-overlay">
                                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Site</a>
                                    </div>
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <h3 className="service-title" style={{ fontSize: '1.4rem' }}>{work.title}</h3>
                                    <p className="service-desc" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>{work.desc}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                        {work.tags.map((tag, i) => (
                                            <span key={i} style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.8rem', borderRadius: '20px', color: 'var(--text-muted)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={work.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>
                                        View Project <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/unparalleled-scholar/" className="social-link">
                            <Linkedin size={24} />
                            <span style={{ display: 'none' }}>LinkedIn</span>
                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Unparalleled Scholar. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
