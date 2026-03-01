import React, { useState, useEffect } from 'react';
import { Menu, X, Code, FileText, Globe, Search, Linkedin, PenTool, Phone, Mail, ChevronRight, CheckCircle, ExternalLink } from 'lucide-react';
import logo from './asset/logo.png';
import cavendishImg from './asset/cavendish.png';
import wishto2026Img from './asset/wishto2026.png';
import momentImg from './asset/moment.png';
import eldritchImg from './asset/eldritch.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Handle anchor scrolling on load if hash is present
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navTo = (hash) => {
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const services = [
        {
            title: "Website Building",
            icon: <Globe size={28} />,
            description: "Custom, responsive websites built with the latest tech stack tailored to your specific needs."
        },
        {
            title: "Web Portfolios",
            icon: <Code size={28} />,
            description: "Showcase your projects and skills with a stunning online portfolio that impresses recruiters."
        },
        {
            title: "Resume Building",
            icon: <FileText size={28} />,
            description: "Professional resume crafting to help you stand out in the competitive job market."
        },
        {
            title: "LinkedIn Optimization",
            icon: <Linkedin size={28} />,
            description: "Enhance your professional social presence and build a strong LinkedIn portfolio."
        },
        {
            title: "Content Writing",
            icon: <PenTool size={28} />,
            description: "High-quality, engaging content for your blogs, websites, or social media channels."
        },
        {
            title: "SEO Optimization",
            icon: <Search size={28} />,
            description: "Improve your search engine rankings and get your content seen by the right audience."
        }
    ];

    const works = [
        {
            title: "Cavendish House Hostel",
            img: cavendishImg,
            link: "https://cavendishouse.vercel.app/",
            desc: "A modern booking booking and info site for a premium hostel."
        },
        {
            title: "WishTo2026",
            img: wishto2026Img,
            link: "https://srijan-xi.github.io/wishto2026/",
            desc: "A vibrant, celebratory site welcoming the new year with style."
        },
        {
            title: "Moment Maker",
            img: momentImg,
            link: "https://srijan-xi.github.io/Moment_Maker/",
            desc: "A minimalist photography portfolio showcasing captured moments."
        }
    ];

    return (
        <div className="app">
            {/* Ambient Background */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'glass-nav' : ''}`}>
                <div className="container nav-content">
                    <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="InfoCluster-xi Logo" className="logo-img" />
                        InfoCluster-xi
                    </Link>

                    <div className="nav-links">
                        <button onClick={() => navTo('home')} className="nav-link bg-transparent border-0 cursor-pointer text-base font-medium">Home</button>
                        <button onClick={() => navTo('about')} className="nav-link bg-transparent border-0 cursor-pointer text-base font-medium">About</button>
                        <button onClick={() => navTo('services')} className="nav-link bg-transparent border-0 cursor-pointer text-base font-medium">Services</button>
                        <button onClick={() => navTo('work-preview')} className="nav-link bg-transparent border-0 cursor-pointer text-base font-medium">Work</button>
                        <button onClick={() => navTo('contact')} className="btn-primary">Get in Touch</button>
                    </div>

                    <button className="mobile-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className={`glass mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <button onClick={() => navTo('home')} className="nav-link text-left">Home</button>
                    <button onClick={() => navTo('about')} className="nav-link text-left">About</button>
                    <button onClick={() => navTo('services')} className="nav-link text-left">Services</button>
                    <button onClick={() => navTo('work-preview')} className="nav-link text-left">Work</button>
                    <button onClick={() => navTo('contact')} className="btn-primary" style={{ textAlign: 'center' }}>Get in Touch</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>Empowering Students with <span className="text-gradient">Digital Excellence</span></h1>
                        <p>
                            We bridge the gap between academic potential and professional presentation. From building your first portfolio website to crafting the perfect resume, we provide affordable, top-tier digital services.
                        </p>
                        <div className="cta-group">
                            <button onClick={() => navTo('contact')} className="btn-primary">Start Your Journey</button>
                            <button onClick={() => navTo('services')} className="btn-glass">View Services</button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="glass floating-card card-1">
                            <Code size={20} className="text-gradient" />
                            <span>Web Dev</span>
                        </div>
                        <div className="glass floating-card card-2">
                            <FileText size={20} className="text-gradient" />
                            <span>Resume</span>
                        </div>
                        <div className="glass floating-card card-3">
                            <Linkedin size={20} className="text-gradient" />
                            <span>LinkedIn</span>
                        </div>
                        {/* Abstract centerpiece */}
                        <div style={{
                            width: '300px',
                            height: '300px',
                            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            opacity: '0.4'
                        }}></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Mission</h2>
                        <h3 className="section-headline">Why InfoCluster-xi?</h3>
                        <p className="service-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            We understand the struggle. As a student, you need a strong portfolio and resume, but professional services can be expensive.
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="glass p-8">
                            <h3 className="service-title">For Students, By Experts</h3>
                            <p className="service-desc mb-4">
                                Lot of students face a common problem: "How do I build a website?" or "What should I add to my resume?"
                            </p>
                            <p className="service-desc mb-4">
                                We leverage the latest tech stack to provide top-tier services at student-friendly rates. We are here to help you navigate the digital landscape without breaking the bank.
                            </p>
                            <div className="feature-list">
                                <div className="feature-item">
                                    <CheckCircle size={20} color="#4ade80" />
                                    <span>Affordable Rates</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={20} color="#4ade80" />
                                    <span>Latest Technology</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle size={20} color="#4ade80" />
                                    <span>Personalized Guidance</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="glass quote-card">
                                <p className="quote-text">
                                    "We know not all students have multiple resources, but we will try to provide you the best service we can."
                                </p>
                                <div style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>- The Team</div>
                            </div>
                            <div className="glass" style={{ padding: '2rem', marginTop: '2rem' }}>
                                <h4 className="service-title" style={{ fontSize: '1.2rem' }}>Our Tech Stack</h4>
                                <p className="service-desc">We utilize modern frameworks and tools to ensure your projects are fast, secure, and industry-standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What We Do</h2>
                        <h3 className="section-headline">Our Services</h3>
                        <p className="service-desc">Everything you need to launch your professional identity.</p>
                    </div>

                    <div className="cards-grid">
                        {services.map((service, index) => (
                            <div key={index} className="glass service-card">
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                                    <ChevronRight size={20} color="var(--text-muted)" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work Preview Section */}
            <section id="work-preview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Portfolio</h2>
                        <h3 className="section-headline">Featured Works</h3>
                        <p className="service-desc">A glimpse of what we've built.</p>
                    </div>

                    <div className="cards-grid">
                        {works.map((work, index) => (
                            <a key={index} href={work.link} target="_blank" rel="noopener noreferrer" className="glass service-card work-card-link" style={{ textDecoration: 'none', display: 'block', padding: 0 }}>
                                <div style={{ height: '200px', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <img src={work.img} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="work-img" />
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <h3 className="service-title" style={{ fontSize: '1.3rem' }}>{work.title}</h3>
                                    <p className="service-desc" style={{ fontSize: '0.95rem' }}>{work.desc}</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', color: 'var(--primary-color)' }}>
                                        <span style={{ fontWeight: 600, marginRight: '0.5rem' }}>Visit Site</span>
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/portfolio" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            View Full Portfolio <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact">
                <div className="container">
                    <div className="glass contact-container" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                        <div className="contact-info">
                            <h2 className="section-headline">Ready to stand out?</h2>
                            <p className="service-desc" style={{ marginBottom: '2rem' }}>
                                Contact us today to discuss your project. Whether you need a simple resume review or a full website build, we are here to help.
                            </p>

                            <div className="contact-item">
                                <Phone size={24} color="var(--secondary-color)" />
                                <span>+91 79733-47454</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={24} color="var(--secondary-color)" />
                                <span>shreejansamsung@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={24} color="var(--secondary-color)" />
                                <span>scholarxx7@gmail.com</span>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <a href="https://www.linkedin.com/company/unparalleled-scholar/" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Linkedin size={20} />
                                    Connect on LinkedIn
                                    <ExternalLink size={16} style={{ opacity: 0.7 }} />
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h3 className="section-title" style={{ marginBottom: '1.5rem', color: 'white' }}>Send us a message</h3>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-input" placeholder="Your name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-input" placeholder="you@example.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">How can we help?</label>
                                    <textarea id="message" rows="4" className="form-input" placeholder="I need a portfolio website..."></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
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
                    <p>&copy; {new Date().getFullYear()} InfoCluster-xi. All rights reserved.</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Empowering students with affordable digital solutions.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;

