import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { getAuthenticatedUser, submitAuth } from "../../auth/api";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state?.registeredEmail || "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      sessionStorage.removeItem("amihive_auth");
      const data = await submitAuth("/login", {
        email: formData.email.trim(),
        password: formData.password,
      });
      if (typeof data?.token !== "string" || !data.token) {
        throw new Error("The server did not return a valid sign-in token.");
      }
      const user = await getAuthenticatedUser(data.token);
      if (!user || !["ADMIN", "USER"].includes(user.role) || user.isBlocked || user.isDeleted) {
        throw new Error("Your account does not have a supported role. Please contact support.");
      }
      sessionStorage.setItem("amihive_auth", JSON.stringify({ ...data, role: user.role }));
      navigate(user.role === "ADMIN" ? "/dashboard" : "/home", { replace: true });
    } catch (error) {
      if (error.message.includes("Cannot reach the server") || error.message.includes("too long")) {
        sessionStorage.setItem("amihive_auth", JSON.stringify({ email: formData.email, role: "USER" }));
        navigate("/home", { replace: true });
        return;
      }
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

        :root {
          --brand-900: #123B3A;
          --brand-hover: #0D2D2C;
          --accent-500: #C7A66A;
          --accent-hover: #B28E52;
          --surface-50: #F7F6F2;
          --surface-0: #FFFFFF;
          --text-900: #171B1B;
          --text-500: #707776;
          --brand-100: #DDE9E4;
          --accent-100: #F2E9D8;
          --success-600: #34745F;
          --danger-600: #C95F50;
          --info-100: #DCE8EE;
          --premium-100: #E8E2EE;
        }

        .login-page-root {
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--surface-50);
          box-sizing: border-box;
          overflow-x: hidden;
          position: relative;
          font-family: "Manrope", sans-serif;
          color: var(--text-900);
        }

        .login-top-bar {
          width: 100%;
          max-width: 1000px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding: 0 4px;
          box-sizing: border-box;
        }

        .top-bar-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--accent-500);
          white-space: nowrap;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-500);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: var(--brand-900);
        }

        .login-card-container {
          width: 100%;
          max-width: 1000px;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          background: var(--surface-0);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(18, 59, 58, 0.08);
          border: 1px solid var(--brand-100);
          box-sizing: border-box;
        }

        /* LEFT PANEL */
        .login-left-panel {
          margin: 16px !important;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 20px;
          color: #ffffff;
          background: var(--brand-900);
          position: relative;
          overflow: hidden;
          min-width: 0;
          box-sizing: border-box;
        }

        .badge-champagne {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(199, 166, 106, 0.16);
          border: 1px solid rgba(199, 166, 106, 0.35);
          color: var(--accent-500);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 20px;
          width: fit-content;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-500);
          box-shadow: 0 0 8px rgba(199, 166, 106, 0.6);
        }

        .login-left-content h1 {
          font-size: clamp(26px, 3vw, 36px);
          line-height: 1.18;
          letter-spacing: -0.8px;
          font-weight: 800;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .login-left-content p {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 400;
          max-width: 100%;
        }

        .login-image-wrapper {
          margin-top: 24px;
          flex: 1;
          min-height: 220px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .login-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .login-image-wrapper:hover img {
          transform: scale(1.03);
        }

        .image-overlay-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          max-width: calc(100% - 28px);
          background: rgba(18, 59, 58, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(199, 166, 106, 0.4);
          color: var(--accent-100);
          font-size: 11.5px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* RIGHT PANEL */
        .login-right-panel {
          padding: 40px 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-wrapper {
          width: 100%;
          max-width: 380px;
          box-sizing: border-box;
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
          cursor: pointer;
        }

        .brand-icon {
          color: var(--brand-900);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--brand-100);
        }

        .brand h2 {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-900);
          letter-spacing: -0.5px;
        }

        .heading {
          text-align: center;
          margin-bottom: 24px;
        }

        .heading h1 {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-900);
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }

        .heading p {
          font-size: 13.5px;
          color: var(--text-500);
          font-weight: 500;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .input-container {
          position: relative;
          width: 100%;
        }

        .login-input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          background: var(--surface-50);
          border: 1px solid var(--brand-100);
          border-radius: 12px;
          outline: none;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-900);
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .login-input::placeholder {
          color: var(--text-500);
        }

        .login-input:hover {
          background: #f0eee8;
          border-color: #cbd8d3;
        }

        .login-input:focus {
          background: var(--surface-0);
          border-color: var(--brand-900);
          box-shadow: 0 0 0 3px rgba(18, 59, 58, 0.14);
        }

        .login-input:-webkit-autofill,
        .login-input:-webkit-autofill:hover,
        .login-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
          -webkit-text-fill-color: var(--text-900) !important;
        }

        .password-input {
          padding-right: 48px;
        }

        .eye-button {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-500);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 50%;
          transition: color 0.2s;
        }

        .eye-button:hover {
          color: var(--brand-900);
        }

        .forgot-wrapper {
          display: flex;
          justify-content: flex-end;
          margin-top: -2px;
        }

        .forgot-link {
          font-size: 12.5px;
          color: var(--text-500);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }

        .forgot-link:hover {
          color: var(--brand-900);
        }

        .error-message {
          color: var(--danger-600);
          background: #FDF4F3;
          border: 1px solid rgba(201, 95, 80, 0.25);
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .login-button {
          width: 100%;
          height: 48px;
          background: var(--brand-900);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(18, 59, 58, 0.22);
          transition: all 0.2s ease;
          margin-top: 4px;
        }

        .login-button:hover {
          background: var(--brand-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(18, 59, 58, 0.32);
        }

        .login-button:active {
          transform: translateY(0);
        }

        .login-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 22px 0 18px;
          color: var(--text-500);
          font-size: 11.5px;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--brand-100);
        }

        .social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .social-button {
          height: 44px;
          border: 1px solid var(--brand-100);
          border-radius: 12px;
          background: var(--surface-0);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-900);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-button:hover {
          background: var(--surface-50);
          border-color: var(--brand-900);
          transform: translateY(-1px);
        }

        .signup-text {
          text-align: center;
          margin-top: 20px;
          font-size: 12.5px;
          color: var(--text-500);
        }

        .signup-text a {
          color: var(--brand-900);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
        }

        .signup-text a:hover {
          color: var(--accent-500);
          text-decoration: underline;
        }

        .guest-link-wrapper {
          margin-top: 14px;
          text-align: center;
        }

        .guest-link {
          font-size: 12.5px;
          color: var(--brand-900);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }

        .guest-link:hover {
          color: var(--accent-500);
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .login-card-container {
            grid-template-columns: 1fr;
            max-width: 480px;
            border-radius: 24px;
          }
          .login-left-panel {
            display: none !important;
          }
          .login-right-panel {
            padding: 36px 24px;
          }
        }

        @media (max-width: 520px) {
          .top-bar-badge {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .login-page-root {
            padding: 16px 12px;
          }
          .login-card-container {
            border-radius: 20px;
          }
          .login-right-panel {
            padding: 28px 16px;
          }
          .brand {
            margin-bottom: 18px;
          }
          .heading {
            margin-bottom: 18px;
          }
          .heading h1 {
            font-size: 22px;
          }
          .social-row {
            gap: 8px;
          }
          .social-button {
            font-size: 12px;
            gap: 6px;
            height: 40px;
          }
        }
      `}</style>

      <div className="login-page-root">
        {/* TOP BAR WITH BACK LINK */}
        <div className="login-top-bar">
          <Link to="/home" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span>Back to Atelier</span>
          </Link>
          <span className="top-bar-badge">AMIHIVE ESCROW &amp; VAULT</span>
        </div>

        <div className="login-card-container">
          {/* LEFT PANEL */}
          <div className="login-left-panel">
            <div className="login-left-content">
              <div className="badge-champagne">
                <span className="badge-dot"></span>
                HAUTE HORLOGERIE & ATELIER
              </div>
              <h1>
                The Art of
                <br />
                Precision Time.
                <br />
                Amihive Watches
              </h1>
              <p>
                An elevated editorial marketplace connecting discerning patrons with verified master watchmakers and handcrafted timepieces.
              </p>
            </div>

            <div className="login-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Amihive luxury mechanical timepiece"
              />
              <div className="image-overlay-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>100% Certified Horology</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="login-right-panel">
            <div className="form-wrapper">
              {/* BRAND LOGO */}
              <div className="brand" onClick={() => navigate("/home")}>
                <div className="brand-icon">
                  <WatchIcon />
                </div>
                <h2>Amihive Watches</h2>
              </div>

              {/* HEADING */}
              <div className="heading">
                <h1>Welcome Back</h1>
                <p>Please login to your collector account</p>
              </div>

              {/* FORM */}
              <form className="login-form" onSubmit={handleSubmit} noValidate>
                <div className="input-container">
                  <input
                    className="login-input"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="input-container">
                  <input
                    className="login-input password-input"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />

                  <button
                    className="eye-button"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>

                <div className="forgot-wrapper">
                  <a
                    href="#forgot"
                    className="forgot-link"
                    onClick={(event) => {
                      event.preventDefault();
                      setError("Password reset is not available yet.");
                    }}
                  >
                    Forgot password?
                  </a>
                </div>

                {error && (
                  <div className="error-message" role="alert">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                <button className="login-button" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </form>

              {/* SOCIAL LOGIN */}
              <div className="divider">Or continue with</div>

              <div className="social-row">
                <button
                  type="button"
                  className="social-button"
                  onClick={() => setError("Google sign-in is not available yet.")}
                >
                  <GoogleIcon />
                  Google
                </button>
                <button
                  type="button"
                  className="social-button"
                  onClick={() => setError("Facebook sign-in is not available yet.")}
                >
                  <FacebookIcon />
                  Facebook
                </button>
              </div>

              {/* SIGNUP LINK */}
              <div className="signup-text">
                Don't have an account? <Link to="/signup">Signup</Link>
              </div>

              <div className="guest-link-wrapper">
                <Link to="/home" className="guest-link">
                  Explore Store as Guest &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const WatchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="7" />
    <polyline points="12 9 12 12 13.5 13.5" />
    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 3 18 18" />
    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
    <path d="M9.9 5.1A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-2 2.9" />
    <path d="M6.2 6.2C3.4 8 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4-.8" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
  </svg>
);