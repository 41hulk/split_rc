import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Forms.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/login" : "/api/register";

    try {
      const response = await fetch(`http://localhost:5030${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <h1>SplitFn</h1>
        <p className="tagline">
          {isLogin ? "Welcome back!" : "Join our community"}
        </p>
      </header>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-form-header">
            <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
            <p>
              {isLogin
                ? "Access your account"
                : "Start your journey with SplitFn"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <button type="submit" className="auth-submit">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="auth-switch">
            <p>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
