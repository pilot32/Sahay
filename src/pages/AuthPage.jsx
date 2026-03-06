import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(false);
    const [role, setRole] = useState('donor');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const { signUp, signIn, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);

        try {
            if (isLogin) {
                const { error } = await signIn({ email, password });
                if (error) throw error;
                navigate('/');
            } else {
                if (!agreedToTerms) {
                    setError('Please agree to the Terms of Service and Privacy Policy.');
                    setLoading(false);
                    return;
                }
                const { error } = await signUp({ email, password, fullName, role });
                if (error) throw error;
                setSuccessMsg('Account created! Please check your email to verify your account.');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        const { error } = await signInWithGoogle();
        if (error) setError(error.message);
    };

    return (
        <div className="auth-page">
            {/* Left Hero Panel */}
            <div className="auth-hero">
                <div className="auth-hero-overlay" />
                <div className="auth-hero-content">
                    <div className="auth-hero-logo">
                        <svg className="auth-hero-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                        </svg>
                        <span className="auth-hero-logo-text">Sahay</span>
                    </div>

                    <h1 className="auth-hero-title">
                        Empowering communities through transparent giving.
                    </h1>
                    <p className="auth-hero-subtitle">
                        Join a community of thousands making a tangible difference in lives every day.
                    </p>

                    <div className="auth-hero-stats">
                        <div className="auth-hero-stat">
                            <span className="auth-hero-stat-number">500+</span>
                            <span className="auth-hero-stat-label">Verified NGOs</span>
                        </div>
                        <div className="auth-hero-stat-divider" />
                        <div className="auth-hero-stat">
                            <span className="auth-hero-stat-number">10K+</span>
                            <span className="auth-hero-stat-label">Active Donors</span>
                        </div>
                        <div className="auth-hero-stat-divider" />
                        <div className="auth-hero-stat">
                            <span className="auth-hero-stat-number">₹2Cr+</span>
                            <span className="auth-hero-stat-label">Donated</span>
                        </div>
                    </div>

                    <p className="auth-hero-copyright">© 2025 Sahay. All rights reserved.</p>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="auth-form-panel">
                <div className="auth-form-container">
                    <h2 className="auth-form-title">
                        {isLogin ? 'Welcome Back' : 'Join the Sahay Community'}
                    </h2>
                    <p className="auth-form-subtitle">
                        {isLogin
                            ? 'Sign in to continue your journey of impact.'
                            : 'Start your journey of making an impact today.'}
                    </p>

                    {/* Role Toggle (Sign Up only) */}
                    {!isLogin && (
                        <div className="auth-role-toggle">
                            <button
                                type="button"
                                className={`auth-role-btn ${role === 'donor' ? 'active' : ''}`}
                                onClick={() => setRole('donor')}
                            >
                                Donor
                            </button>
                            <button
                                type="button"
                                className={`auth-role-btn ${role === 'ngo_admin' ? 'active' : ''}`}
                                onClick={() => setRole('ngo_admin')}
                            >
                                NGO
                            </button>
                        </div>
                    )}

                    {/* Error / Success Messages */}
                    {error && (
                        <div className="auth-message auth-error">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 4.5v4M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            {error}
                        </div>
                    )}
                    {successMsg && (
                        <div className="auth-message auth-success">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {successMsg}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="auth-form">
                        {!isLogin && (
                            <div className="auth-field">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="password">Password</label>
                            <div className="auth-password-wrapper">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    className="auth-password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox (Sign Up only) */}
                        {!isLogin && (
                            <label className="auth-terms">
                                <input
                                    type="checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                />
                                <span>
                                    I agree to the{' '}
                                    <a href="#terms" className="auth-link">Terms of Service</a>{' '}
                                    and{' '}
                                    <a href="#privacy" className="auth-link">Privacy Policy</a>
                                </span>
                            </label>
                        )}

                        <button
                            type="submit"
                            className="auth-submit-btn"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="auth-spinner" />
                            ) : isLogin ? (
                                'Sign In'
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="auth-divider">
                        <span>Or {isLogin ? 'sign in' : 'sign up'} with</span>
                    </div>

                    {/* Social Buttons */}
                    <div className="auth-social-buttons">
                        <button
                            type="button"
                            className="auth-social-btn"
                            onClick={handleGoogleSignIn}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button type="button" className="auth-social-btn" disabled>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Apple
                        </button>
                    </div>

                    {/* Toggle Login/Signup */}
                    <p className="auth-toggle-text">
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        <button
                            type="button"
                            className="auth-toggle-btn"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError('');
                                setSuccessMsg('');
                            }}
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
