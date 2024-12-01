import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-header">
        <h1>SplitFn</h1>
        <p className="tagline">Split bills effortlessly with friends and family</p>
        <button className="cta-button" onClick={() => navigate("/auth")}>
          Get Started
        </button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Never worry about who owes what</h2>
            <p>Track, split, and settle expenses with ease</p>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <h3>1M+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-card">
              <h3>$500M+</h3>
              <p>Bills Split</p>
            </div>
            <div className="stat-card">
              <h3>4.8★</h3>
              <p>User Rating</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose SplitFn?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💸</div>
              <h3>Easy Splitting</h3>
              <p>Split bills equally or with custom amounts in seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Real-time Sync</h3>
              <p>All expenses are instantly synced across devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Smart Reports</h3>
              <p>Get insights into your group spending patterns</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Reminders</h3>
              <p>Gentle reminders for pending settlements</p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create a Group</h3>
              <p>Start by creating a group for your shared expenses</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Add Expenses</h3>
              <p>Log your shared expenses as they happen</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Split & Settle</h3>
              <p>Split bills and settle up with a few clicks</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to get started?</h2>
          <p>Join millions of users who trust SplitFn for their expense sharing</p>
          <button className="cta-button" onClick={() => navigate("/auth")}>
            Create Free Account
          </button>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>SplitFn</h3>
            <p>Making expense sharing simple</p>
          </div>
          <p className="copyright">© 2024 SplitFn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
