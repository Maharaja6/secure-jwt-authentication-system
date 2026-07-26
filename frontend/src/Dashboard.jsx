import { useEffect, useState } from "react";
import API from "./api";
import "./Dashboard.css";

function Dashboard() {

    const [user, setUser] = useState("");

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await API.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data.username);

            }

            catch {

                localStorage.removeItem("token");
                window.location.href = "/";

            }

        };

        fetchProfile();

    }, []);

    const logout = () => {

        localStorage.removeItem("token");
        window.location.href = "/";

    };

    return (

        <div className="dashboard-container">

            <div className="dashboard-card">

                <div className="dashboard-header">

                    <div style={{ fontSize: "60px", marginBottom: "15px" }}>
                        👨‍💻
                    </div>

                    <h1>Secure Authentication Dashboard</h1>

                    <p>
                        Welcome back! Your identity has been verified successfully.
                    </p>

                </div>

                <div className="profile-card">

                    <h2>👋 Welcome, {user}</h2>

                    <p><strong>Username :</strong> {user}</p>

                    <p><strong>Role :</strong> Authenticated User</p>

                    <p><strong>Status :</strong> 🟢 Active Session</p>

                    <p><strong>Security :</strong> JWT Verified</p>

                </div>

                <div className="status-grid">

                    <div className="status-box">

                        <h3>🔐 Authentication</h3>

                        <p>✅ Login Successful</p>

                        <p>✅ JWT Token Verified</p>

                        <p>✅ Access Authorized</p>

                    </div>

                    <div className="status-box">

                        <h3>🛡 Security</h3>

                        <p>✅ Password Encrypted</p>

                        <p>✅ bcrypt Hashing</p>

                        <p>✅ Secure API Access</p>

                    </div>

                    <div className="status-box">

                        <h3>⚙ Backend</h3>

                        <p>FastAPI REST API</p>

                        <p>SQLite Database</p>

                        <p>Protected Routes</p>

                    </div>

                    <div className="status-box">

                        <h3>🚀 Frontend</h3>

                        <p>React JS</p>

                        <p>Axios Integration</p>

                        <p>Responsive UI</p>

                    </div>

                </div>

                <div className="tech-stack">

                    <div className="badge">React</div>

                    <div className="badge">FastAPI</div>

                    <div className="badge">JWT</div>

                    <div className="badge">SQLite</div>

                    <div className="badge">Axios</div>

                    <div className="badge">bcrypt</div>

                </div>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    🚪 Logout
                </button>

                <div className="footer">

                    © 2026 Secure Authentication System

                    <br /><br />

                    Developed using React • FastAPI • JWT • SQLite

                </div>

            </div>

        </div>

    );

}

export default Dashboard;