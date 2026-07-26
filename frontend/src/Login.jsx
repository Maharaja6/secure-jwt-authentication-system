import { useState } from "react";
import API from "./api";
import "./Login.css";

function Login({ goToRegister }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const login = async () => {

        setLoading(true);
        setError("");

        try {

            const formData = new URLSearchParams();

            formData.append("username", username);
            formData.append("password", password);

            const response = await API.post("/login", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            localStorage.setItem("token", response.data.access_token);

            window.location.reload();

        } catch (error) {

            if (error.response) {
                setError(error.response.data.detail);
            } else {
                setError("Unable to connect to the server.");
            }

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-wrapper">

            <div className="login-card">

                <div className="logo">
                    🔐
                </div>

                <h1>Secure Login</h1>

                <p className="subtitle">
                    JWT Authentication System
                </p>

                {error &&
                    <div className="error-message">
                        {error}
                    </div>
                }

                <div className="form-group">

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <div className="password-box">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </span>

                    </div>

                </div>

                <button
                    className="login-btn"
                    onClick={login}
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Login"}
                </button>

                {/* Register Link */}
                <div className="bottom-text">
                    Don't have an account?
                    <span onClick={goToRegister}> Register</span>
                </div>

                <div className="footer">
                    Built with React • FastAPI • JWT
                </div>

            </div>

        </div>

    );

}

export default Login;