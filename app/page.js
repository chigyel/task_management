import Image from "next/image";
import Link from "next/link";
import './local.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="hero-section">
          <h1 className="main-title">Task Management System</h1>
          <p className="subtitle">Organize your tasks efficiently and boost your productivity</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Task Organization</h3>
            <p>Keep all your tasks in one place</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Access</h3>
            <p>Easy and fast task management</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data is always protected</p>
          </div>
        </div>

        <div className="cta-section">
          <Link href={'/login'} className="cta-button login-btn">
            Sign In
          </Link>
          <Link href={'/register'} className="cta-button register-btn">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
