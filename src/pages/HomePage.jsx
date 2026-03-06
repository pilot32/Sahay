import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
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
            <div className="home-loading">
                <div className="home-spinner" />
            </div>
        );
    }

    return (
        <div className="home-page">
            <nav className="home-nav">
                <div className="home-nav-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#4ade80" />
                    </svg>
                    <span>Sahay</span>
                </div>
                <div className="home-nav-actions">
                    {user ? (
                        <>
                            <span className="home-user-email">{user.email}</span>
                            <button onClick={handleSignOut} className="home-signout-btn">
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <button onClick={() => navigate('/auth')} className="home-signin-btn">
                            Sign In
                        </button>
                    )}
                </div>
            </nav>

            <main className="home-main">
                <div className="home-hero">
                    <h1 className="home-hero-title">
                        Welcome to <span className="home-brand-text">Sahay</span>
                    </h1>
                    <p className="home-hero-subtitle">
                        Connecting NGOs with Donors — transparent, efficient, and trust-based giving.
                    </p>
                    {!user && (
                        <button onClick={() => navigate('/auth')} className="home-cta-btn">
                            Get Started
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}
