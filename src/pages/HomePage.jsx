import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    const { user, signOut, loading } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/auth');
    };

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loading-spinner" />
            </div>
        );
    }

    return (
        <div className="landing-page">
            {/* ===== NAVBAR ===== */}
            <nav className="nav">
                <div className="nav-inner">
                    <Link to="/" className="nav-logo">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#22c55e" />
                        </svg>
                        <span>Sahay</span>
                    </Link>

                    <div className="nav-links">
                        <a href="#how-it-works" className="nav-link">Browse Needs</a>
                        <a href="#how-it-works" className="nav-link">NGOs</a>
                        <a href="#footer" className="nav-link">About Us</a>
                        <a href="#stats" className="nav-link">Impact</a>
                    </div>

                    <div className="nav-search">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input type="text" placeholder="Search NGO or cause..." />
                    </div>

                    <div className="nav-actions">
                        {user ? (
                            <>
                                <span className="nav-user-email">{user.email}</span>
                                <button onClick={handleSignOut} className="nav-btn-outline">Sign Out</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => navigate('/auth')} className="nav-link-btn">Sign In</button>
                                <button onClick={() => navigate('/auth')} className="nav-btn-primary">Register</button>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* ===== HERO SECTION ===== */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/hero-bg.png" alt="Sahay community volunteers" />
                    <div className="hero-overlay" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Your extra is someone's<br /> everything
                    </h1>
                    <p className="hero-subtitle">
                        Connecting NGOs and donors through a transparent marketplace.
                        Every contribution creates a measurable impact on lives.
                    </p>
                    <div className="hero-cta-group">
                        <button onClick={() => navigate('/auth')} className="hero-cta-green">
                            Browse Needs
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                        <button onClick={() => navigate('/auth')} className="hero-cta-yellow">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            I want to donate
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section className="stats" id="stats">
                <div className="stats-inner">
                    <div className="stat-card">
                        <div className="stat-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="stat-content">
                            <span className="stat-label">Active Donors</span>
                            <span className="stat-number">12,450+</span>
                        </div>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-card">
                        <div className="stat-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        </div>
                        <div className="stat-content">
                            <span className="stat-label">Partner NGOs</span>
                            <span className="stat-number">850+</span>
                        </div>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-card">
                        <div className="stat-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <polyline points="9 12 11 14 15 10" />
                            </svg>
                        </div>
                        <div className="stat-content">
                            <span className="stat-label">Lives Impacted</span>
                            <span className="stat-number">50,000+</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="how-it-works" id="how-it-works">
                <div className="how-inner">
                    <h2 className="section-title">How Sahay Works</h2>
                    <p className="section-subtitle">
                        A seamless path from your generosity to verified impact on the ground.
                    </p>

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h3 className="step-title">Discover Needs</h3>
                            <p className="step-desc">
                                Explore verified campaigns from trusted NGOs. Filter by cause, location, or urgency to find what matters to you.
                            </p>
                        </div>

                        <div className="step-card">
                            <div className="step-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    <path d="M7 13l3 3 5-5" />
                                </svg>
                            </div>
                            <h3 className="step-title">Contribute Securely</h3>
                            <p className="step-desc">
                                Donate funds or resources directly through our transparent marketplace with 100% secure payment processing.
                            </p>
                        </div>

                        <div className="step-card">
                            <div className="step-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3 className="step-title">Track Impact</h3>
                            <p className="step-desc">
                                Receive real-time updates and transparent impact reports from the NGOs you support. See your change in action.
                            </p>
                        </div>
                    </div>

                    <div className="how-cta-wrap">
                        <button onClick={() => navigate('/auth')} className="how-cta-btn">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="footer" id="footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#22c55e" />
                            </svg>
                            <span>Sahay</span>
                        </div>
                        <p className="footer-tagline">
                            Sahay is building trust in humanitarian giving through transparency and technology. We bridge the gap between those who want to help and those who need it most.
                        </p>
                        <div className="footer-social">
                            {/* Twitter */}
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Email */}
                            <a href="#" className="social-icon" aria-label="Email">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 7l-10 7L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Browse Needs</a></li>
                            <li><a href="#">NGO Directory</a></li>
                            <li><a href="#">Success Stories</a></li>
                            <li><a href="#">Trust &amp; Safety</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Impact Report</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Sahay Foundation. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
