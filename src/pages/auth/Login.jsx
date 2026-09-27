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
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Manrope", sans-serif;
          background-color: #f1f3f6;
          color: #191b23;
          -webkit-font-smoothing: antialiased;
        }

        button, input {
          font-family: inherit;
        }

        .login-page {
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 24px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f1f3f6;
        }

        .login-card {
          width: 100%;
          max-width: 1040px;
          min-height: 620px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #ffffff;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        /* LEFT PANEL */
        .left-section {
          margin: 16px;
          padding: 44px 38px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 24px;
          color: #ffffff;
          background: #fd661d;
          position: relative;
          overflow: hidden;
        }

        .left-content h1 {
          font-size: 42px;
          line-height: 1.1;
          letter-spacing: -1px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .left-content p {
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.92);
          font-weight: 500;
          max-width: 380px;
        }

        .image-wrapper {
          margin-top: 28px;
          flex: 1;
          min-height: 240px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover img {
          transform: scale(1.03);
        }

        /* RIGHT PANEL */
        .right-section {
          padding: 48px 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-wrapper {
          width: 100%;
          max-width: 400px;
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 28px;
          cursor: pointer;
        }

        .brand-icon {
          color: #2874f0;
          display: flex;
          align-items: center;
        }

        .brand h2 {
          font-size: 22px;
          font-weight: 800;
          color: #191b23;
          letter-spacing: -0.5px;
        }

        .heading {
          text-align: center;
          margin-bottom: 28px;
        }

        .heading h1 {
          font-size: 28px;
          font-weight: 800;
          color: #191b23;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }

        .heading p {
          font-size: 13.5px;
          color: #727786;
          font-weight: 500;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-container {
          position: relative;
          width: 100%;
        }

        .input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          background: #f2f3fe;
          border: 1px solid transparent;
          border-radius: 12px;
          outline: none;
          font-size: 13.5px;
          font-weight: 500;
          color: #191b23;
          transition: all 0.2s ease;
        }

        .input::placeholder {
          color: #8e92a0;
        }

        .input:hover {
          background: #eaeefc;
        }

        .input:focus {
          background: #ffffff;
          border-color: #2874f0;
          box-shadow: 0 0 0 3px rgba(40, 116, 240, 0.12);
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
          color: #727786;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
          transition: color 0.2s;
        }

        .eye-button:hover {
          color: #2874f0;
        }

        .forgot-wrapper {
          display: flex;
          justify-content: flex-end;
          margin-top: -4px;
        }

        .forgot-link {
          font-size: 12.5px;
          color: #424754;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }

        .forgot-link:hover {
          color: #2874f0;
        }

        .error-message {
          color: #ba1a1a;
          font-size: 11.5px;
          font-weight: 600;
          margin-top: -6px;
        }

        .login-button {
          width: 100%;
          height: 48px;
          background: #fd661d;
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(253, 102, 29, 0.25);
          transition: all 0.2s ease;
          margin-top: 4px;
        }

        .login-button:hover {
          background: #e25510;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(253, 102, 29, 0.32);
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
          margin: 24px 0 20px;
          color: #8e92a0;
          font-size: 11.5px;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e1e2ec;
        }

        .social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .social-button {
          height: 44px;
          border: 1px solid #c2c6d6;
          border-radius: 12px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #191b23;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-button:hover {
          background: #f8f9fe;
          border-color: #a3a8b8;
          transform: translateY(-1px);
        }

        .signup-text {
          text-align: center;
          margin-top: 24px;
          font-size: 12.5px;
          color: #727786;
        }

        .signup-text a {
          color: #fd661d;
          font-weight: 700;
          text-decoration: none;
        }

        .signup-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .login-card {
            grid-template-columns: 1fr;
            max-width: 480px;
            border-radius: 24px;
          }
          .left-section {
            display: none;
          }
          .right-section {
            padding: 40px 24px;
          }
        }
      `}</style>

      <div className="login-page">
        <main className="login-card">
          {/* LEFT PANEL */}
          <section className="left-section">
            <div className="left-content">
              <h1>
                Discover the
                <br />
                best deals at
                <br />
                Amihive Ecom
              </h1>
              <p>
                Your one-stop destination for curated workspace essentials and premium lifestyle products.
              </p>
            </div>

            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                alt="Amihive workspace desk setup"
              />
            </div>
          </section>

          {/* RIGHT PANEL */}
          <section className="right-section">
            <div className="form-wrapper">
              {/* BRAND LOGO */}
              <div className="brand" onClick={() => navigate("/")}>
                <div className="brand-icon">
                  <CartIcon />
                </div>
                <h2>Amihive Ecom</h2>
              </div>

              {/* HEADING */}
              <div className="heading">
                <h1>Welcome Back</h1>
                <p>Please login to your account</p>
              </div>

              {/* FORM */}
              <form className="login-form" onSubmit={handleSubmit} noValidate>
                <div className="input-container">
                  <input
                    className="input"
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
                    className="input password-input"
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
                  <a href="#forgot" className="forgot-link" onClick={(event) => {
                    event.preventDefault();
                    setError("Password reset is not available yet.");
                  }}>
                    Forgot password?
                  </a>
                </div>

                {error && <p className="error-message" role="alert">{error}</p>}

                {location.state?.registeredEmail && (
                  <output>Account created. Sign in to continue.</output>
                )}

                <button className="login-button" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Login"}
                </button>
              </form>

              {/* DIVIDER */}
              <div className="divider">
                <span>Or Login with</span>
              </div>

              {/* SOCIAL BUTTONS */}
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
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

const CartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="20" r="1" />
    <circle cx="19" cy="20" r="1" />
    <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
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